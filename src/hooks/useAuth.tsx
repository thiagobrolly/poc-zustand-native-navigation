import { useAuthStore } from '../stores/authStore';
import { useLoginAppMutation } from '../graphql/generated';

export const useAuth = () => {
  const { setToken, setUserIsLoading } = useAuthStore((store) => {
    return {
      setToken: store.setToken,
      setUserIsLoading: store.setUserIsLoading,
    };
  });

  const [loginAppMutation] = useLoginAppMutation();

  const login = async (email: string, password: string) => {
    setUserIsLoading(true);
    try {
      const { data } = await loginAppMutation({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      if (data?.loginApp) {
        setToken({
          token: data?.loginApp.accessToken ?? '',
          refreshToken: data?.loginApp.refreshToken ?? '',
        });
      }
    } catch (error) {
      console.log('Ocorreu um erro no login:', error);
    }
  };

  return { login };
};
