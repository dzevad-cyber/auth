import { create } from 'zustand';

export const useClientStore = create((_set) => {
  accessToken: '';
});
