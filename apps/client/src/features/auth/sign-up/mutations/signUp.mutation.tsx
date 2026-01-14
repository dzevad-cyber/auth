import { _axios } from '@/services/axios';
import { useMutation } from '@tanstack/react-query';
import { apiV1FullPaths, signUpSchema } from '@auth/shared';
import * as z from 'zod';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: async (params: CreateUserParams) => {
      return await createUser(params);
    },
    onError: (error) => {
      console.error('[ signUp.mutation.tsx - 17 ] - error:', error);
    },
  });
};

const createUser = async (params: CreateUserParams) => {
  const { firstName, lastName, password, passwordConfirm, email } = params;

  const res = await _axios.post(apiV1FullPaths.signUp, {
    firstName,
    lastName,
    password,
    passwordConfirm,
    email,
  });

  return res;
};

type CreateUserParams = z.infer<typeof signUpSchema>;
