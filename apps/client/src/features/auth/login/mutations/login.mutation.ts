import { _axios } from '@/services/axios';
import { apiV1FullPaths, loginSchema } from '@auth/shared';
import { useMutation } from '@tanstack/react-query';
import * as z from 'zod';

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (params: LoginParams) => {
      return await loginUser(params);
    },
    onError: (error) => {
      console.error('[ login.mutation.tsx - 17 ] - error:', error);
    },
  });
};

const loginUser = async (params: LoginParams) => {
  const { email, password } = params;

  const res = await _axios.post(apiV1FullPaths.login, {
    email,
    password,
  });

  return res;
};

type LoginParams = z.infer<typeof loginSchema>;
