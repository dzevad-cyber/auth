import { _axios } from '@/services/axios';
import { apiV1FullPaths } from '@auth/shared';
import { useQuery } from '@tanstack/react-query';

export const useGetAuthenticatedUserQuery = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getAuthenticatedUser,
  });
};

async function getAuthenticatedUser() {
  const res = await _axios.get(`${apiV1FullPaths.user}`);

  return res.data;
}
