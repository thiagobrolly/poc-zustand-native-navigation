import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { useAuthStore } from '../stores/authStore';
import {
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
} from '../graphql/generated';

const uri = 'API ENDERECO';
const httpLink = new HttpLink({ uri });

const generateRefreshTokenLinkOnUnauthError = ({
  refreshTokenPathName,
  refreshTokenRequestFunc,
}: {
  refreshTokenPathName: string;
  refreshTokenRequestFunc: () => Promise<void>;
}) => {
  return [
    onError(({ graphQLErrors, operation, forward }) => {
      if (!graphQLErrors) return;

      for (const { path, extensions } of graphQLErrors) {
        if (extensions.code !== 'UNAUTHENTICATED' || !path) continue;
        if (path.includes(refreshTokenPathName)) break;

        const { getContext, setContext } = operation;
        const context = getContext();

        setContext({
          ...context,
          headers: {
            ...context?.headers,
            _needsRefresh: true,
          },
        });

        return forward(operation);
      }
    }),
    setContext(async (_, previousContext) => {
      if (previousContext?.headers?._needsRefresh) {
        await refreshTokenRequestFunc();
      }

      return previousContext;
    }),
  ];
};

const authMiddleware = setContext((_, previousContext) => {
  const { token } = useAuthStore((state) => state);

  return {
    ...previousContext,
    headers: {
      ...previousContext?.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const refreshTokenReq = async (
  refreshToken: string | null,
  setToken: (tokens: { token: string; refreshToken: string }) => void
) => {
  if (refreshToken) {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri,
    });

    client
      .mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
        mutation: RefreshTokenDocument,
        variables: {
          input: {
            refreshToken,
          },
        },
      })
      .then((res) => {
        setToken({
          token: res.data?.refreshToken.accessToken ?? '',
          refreshToken: res.data?.refreshToken.refreshToken ?? '',
        });
      })
      .catch(() => {
        setToken({ token: '', refreshToken: '' });
      });
  } else {
    setToken({ token: '', refreshToken: '' });
  }
};

export const useApolloClient = () => {
  const { refreshToken, setToken } = useAuthStore((state) => state);

  const links = from([
    ...generateRefreshTokenLinkOnUnauthError({
      refreshTokenPathName: 'refreshToken',
      refreshTokenRequestFunc: () => refreshTokenReq(refreshToken, setToken),
    }),
    authMiddleware,
    httpLink,
  ]);

  const apolloClient = new ApolloClient({
    link: links,
    cache: new InMemoryCache(),
  });

  return { apolloClient };
};