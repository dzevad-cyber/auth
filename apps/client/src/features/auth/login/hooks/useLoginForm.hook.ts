import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';
import { getSuccessToast } from '@/components/toast/toasts';

import { useNavigate } from '@tanstack/react-router';
import { loginSchema } from '@auth/shared';
import { useLoginUser } from '../mutations/login.mutation';

export const useFormLogin = () => {
  const { mutate, isPending } = useLoginUser();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      mutate(value, {
        onSuccess: () => {
          form.reset();
        },
      });
    },
  });

  return { form, isPending };
};
