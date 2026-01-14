import { SignupForm } from '@/features/auth/sign-up/signup-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/_authLayout/sign-up')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupForm />;
}
