import { useClientStore } from '@/client-store/client.store';
import { getSuccessToast } from '@/components/toast/toasts';
import { queryClient } from '@/integrations/tanstack-query/root-provider';
import { _axios } from '@/services/axios';
import { apiV1FullPaths, loginSchema } from '@auth/shared';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import * as z from 'zod';

export const useLoginUser = () => {
  const setAccessToken = useClientStore((state) => state.setAccessToken);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (params: LoginParams) => {
      return await loginUser(params);
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
      }
    },
    onSuccess: (res) => {
      const { data } = res;
      setAccessToken(data.accessToken);
      queryClient.setQueryData(['accessToken'], data.accessToken);

      toast.success(
        ...getSuccessToast(
          data.message,
          'Thanks for logging in! We hope you enjoy using our services!',
        ),
      );
      navigate({
        to: '/',
      });
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
