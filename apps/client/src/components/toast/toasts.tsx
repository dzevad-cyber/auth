import type { ExternalToast } from 'sonner';
import { AnimatedCheckIcon } from '../icons/animated/AnimatedCheckIcon';

export const toasts: Toasts = {
  success: {
    title: 'Account created successfully',
    data: {
      description: 'You can now sign in',
      style: {
        '--normal-bg':
          'light-dark(var(--color-green-600), var(--color-green-400))',
        '--normal-text': 'var(--color-white)',
        '--normal-border':
          'light-dark(var(--color-green-600), var(--color-green-400))',
      } as React.CSSProperties,
      classNames: {
        description: '!text-white pl-4',
        title: '!text-white text-sm pl-4 !font-bold',
      },
      icon: <AnimatedCheckIcon />,
    },
  },
};

type Toasts = {
  success: {
    title: string;
    data: ExternalToast;
  };
};
