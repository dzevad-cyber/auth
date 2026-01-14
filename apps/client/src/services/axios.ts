import { queryClient } from '@/integrations/tanstack-query/root-provider';
import axios from 'axios';

export const _axios = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

_axios.interceptors.request.use((config) => {
  const accessToken = queryClient.getQueryData<string>(['accessToken']);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
