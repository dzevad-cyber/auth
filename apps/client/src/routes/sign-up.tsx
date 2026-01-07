import { createFileRoute } from '@tanstack/react-router'
import { SignupForm } from '@/components/signup-form'

export const Route = createFileRoute('/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid justify-center">
      <div className="min-w-[400px]">
        <SignupForm />
      </div>
    </div>
  )
}
