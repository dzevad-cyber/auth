import { LoginForm } from '@/components/login-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_authLayout/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginForm />
}
