import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_authLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid justify-center content-center">
      <div className="min-w-[400px]">
        <Outlet />
      </div>
    </div>
  )
}
