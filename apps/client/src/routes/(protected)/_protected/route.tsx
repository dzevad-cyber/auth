import { getRefreshhTokenQueryOptions } from '@/features/auth/refresh/queries/getRereshToken.query';

import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/(protected)/_protected')({
  beforeLoad: async ({ context }) => {
    try {
      await context.queryClient.ensureQueryData(getRefreshhTokenQueryOptions());
    } catch (err) {
      throw redirect({
        to: '/',
        replace: true,
        search: {
          message: 'Your session has expired. Please log in.',
          type: 'error',
        },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
