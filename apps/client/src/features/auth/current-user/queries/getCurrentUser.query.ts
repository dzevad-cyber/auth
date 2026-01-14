import { _axios } from '@/services/axios';
import { apiV1FullPaths } from '@auth/shared';
import { useQuery } from '@tanstack/react-query';
import * as z from 'zod';

export const useGetAuthenticatedUserQuery = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getAuthenticatedUser,
  });
};

async function getAuthenticatedUser() {
  const res = await _axios.get(`${apiV1FullPaths.user}`);

  const parsedRes = AuthUserResSchema.safeParse(res.data);
  if (!parsedRes.success) {
    throw new Error(parsedRes.error.message);
  }

  return parsedRes.data;
}

const AuthUserResSchema = z.object({
  user: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
});
