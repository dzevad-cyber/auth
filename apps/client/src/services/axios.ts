import { queryClient } from '@/integrations/tanstack-query/root-provider';
import axios from 'axios';

export const _axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_DEV,
  withCredentials: true,
});

_axios.interceptors.request.use((config) => {
  const accessToken = queryClient.getQueryData<string>(['accessToken']);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
