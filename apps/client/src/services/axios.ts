import { useClientStore } from '@/client-store/client.store';
import axios from 'axios';

export const _axios = axios.create({
  baseURL: 'http://localhost:5000',
});

_axios.interceptors.request.use((config) => {
  const accessToken = useClientStore((state) => state.accessToken);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
