import { motion } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const AnimatedCheckIcon = ({
  className,
  size = 30,
  ...props
}: AnimatedCheckIconProps) => {
  return (
    <div className={cn(className)} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        ></motion.circle>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            ease: 'easeOut',
          }}
          d="m9 12 2 2 4-4"
        />
      </svg>
    </div>
  );
};

AnimatedCheckIcon.displayName = 'AnimatedCheckIcon';

interface AnimatedCheckIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}
