import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';

import type { QueryClient } from '@tanstack/react-query';
import { Toaster } from 'sonner';
<<<<<<< Updated upstream
import { queryClient } from '@/integrations/tanstack-query/root-provider';
import { getRefreshToken } from '@/features/auth/refresh/queries/getRereshToken.query';
=======
import Header from '@/components/header/Header';
>>>>>>> Stashed changes

export interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    try {
      const data = await queryClient.ensureQueryData({
        queryKey: ['refreshToken'],
        queryFn: getRefreshToken,
      });

      if (data.accessToken) {
        queryClient.setQueryData(['accessToken'], data.accessToken);
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  },
  component: () => (
    <div className="grid h-screen">
      <Outlet />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
        ]}
      />
      <Toaster className="animate-slide-up" />
    </div>
  ),
});
