import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SetToken = {
  token: string;
  refreshToken: string;
};

type State = {
  user: { id: string; name: string } | null;
  token: string | null;
  userIsLoading: boolean;
  refreshToken: string | null;
}

type Actions = {
  setUser: (user: { id: string; name: string }) => void;
  setToken({ token, refreshToken }: SetToken): void;
  setUserIsLoading: (loading: boolean) => void;
  logout: () => void;
}

// interface AuthState {
//   user: { id: string; name: string } | null;
//   token: string | null;
//   refreshToken: string | null;
//   setUser: (user: { id: string; name: string }) => void;
//   setToken({ token, refreshToken }: SetToken): void;
//   logout: () => void;
// }

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      user: null,
      token: null,
      userIsLoading: false,
      refreshToken: null,
      setUser: (user) => set({ user }),
      setToken: ({ token, refreshToken }) => set({ token, refreshToken }),
      setUserIsLoading: (loading) => set({ userIsLoading: loading }),
      logout: () => {
        AsyncStorage.removeItem('auth-tokens-store');
        set({ user: null, token: null, refreshToken: null, userIsLoading: false })
      },
    }),
    {
      name: 'auth-tokens-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
