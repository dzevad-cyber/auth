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
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          d="M4 12 9 17L20 6"
        />
      </svg>
    </div>
  );
};

AnimatedCheckIcon.displayName = 'AnimatedCheckIcon';

interface AnimatedCheckIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}
