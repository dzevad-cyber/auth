import { create } from 'zustand';

export const useClientStore = create((set) => {
  accessToken: '';
  setAccessToken: (newAccessToken: string) =>
    set({
      accessToken: newAccessToken,
    });
});
