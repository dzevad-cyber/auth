import { createFileRoute, useNavigate } from '@tanstack/react-router';
import Header from '@/components/header/Header';
import * as z from 'zod';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const Route = createFileRoute('/')({
  validateSearch: (searchParams) => {
    return searchParamsSchema.safeParse(searchParams).data;
  },
  component: Home,
});

function Home() {
  const searchParams = Route.useSearch();
  const navigate = useNavigate({
    from: '/',
  });

  useEffect(() => {
    if (searchParams?.message && searchParams.type === 'error') {
      setTimeout(() => {
        toast.error(searchParams.message, {
          id: 'x',
        });
      }, 100);
      navigate({
        search: (prev) => {
          if (prev) {
            const { message, type, ...rest } = prev;
            return rest;
          }
        },
      });
    }
  }, [searchParams]);

  return (
    <div>
      <Header />
    </div>
  );
}

const searchParamsSchema = z.object({
  message: z.string().optional(),
  type: z.enum(['error']).optional(),
});
