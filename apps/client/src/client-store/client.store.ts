import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useClientStore = create<ClientState>()(
  devtools((set) => ({
    accessToken: '',
    setAccessToken: (newAccessToken: string) =>
      set({
        accessToken: newAccessToken,
      }),
  })),
);

type ClientState = {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
};
