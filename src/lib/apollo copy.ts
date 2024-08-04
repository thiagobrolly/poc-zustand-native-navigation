import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  RequestHandler,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { useAuthStore } from '../stores/authStore';
import {
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
} from '../graphql/generated';

const uri = 'API ENDERECO';

const httpLink = new HttpLink({ uri });

export const useApolloClient = () => {
  const { token, refreshToken, setToken } = useAuthStore((state) => state);

  const authMiddleware = new ApolloLink((operation, forward) => {
    const ctx = operation.getContext();
    const headers = {
      Authorization: token ? `Bearer ${token}` : '',
      ...ctx.headers,
    };
    operation.setContext({
      headers,
    });
    return forward(operation);
  });

  const refreshTokenLink = onError((networkError) => {
    const unauthorized =
      networkError?.response?.errors?.[0].message === 'Unauthorized';

    if (!unauthorized) return;

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
  });

  const links = from([authMiddleware, httpLink]);

  const apolloClient = new ApolloClient({
    link: refreshTokenLink.concat(links),
    // uri,
    cache: new InMemoryCache(),
  });

  return { apolloClient };
};
