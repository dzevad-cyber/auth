import { createFileRoute } from '@tanstack/react-router'
import { SignupForm } from '@/components/signup-form'

export const Route = createFileRoute('/(auth)/_authLayout/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignupForm />
}
