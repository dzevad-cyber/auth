import { useForm } from '@tanstack/react-form';
import { signUpSchema } from '@auth/shared';
import { useCreateUser } from '../mutations/signUp.mutation';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { getSuccessToast } from '@/components/toast/toasts';

export function useSignupForm() {
  const { mutate, isPending } = useCreateUser();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validators: {
      onSubmit: signUpSchema,
    },
    onSubmit: async ({ value }) => {
      mutate(value, {
        onSuccess: () => {
          form.reset();
          toast.success(
            ...getSuccessToast(
              'Account created successfully',
              'You can now sign in',
            ),
          );
          navigate({
            to: '/login',
          });
        },
      });
    },
  });

  return { form, isPending };
}
