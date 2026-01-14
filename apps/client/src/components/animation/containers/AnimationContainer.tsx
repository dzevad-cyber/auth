import { motion, type HTMLMotionProps } from 'motion/react';

const AnimatedContainer: React.FC<AnimatedContainerProps> = (props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      {...props}
    />
  );
};

export default AnimatedContainer;

interface AnimatedContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}
