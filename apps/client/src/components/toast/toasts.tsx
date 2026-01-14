import { AnimatedCheckIcon } from '../animation/icons/AnimatedCheckIcon';

export const getSuccessToast = (
  title: string,
  description: string = '',
): [string, Record<string, any>] => {
  return [
    title,
    {
      description,
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
  ];
};
