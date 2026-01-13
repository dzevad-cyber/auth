import { motion, type HTMLMotionProps } from 'motion/react';

const AnimatedContainer: React.FC<AnimatedContainerProps> = (props) => {
  console.log('[ AnimationContainer.tsx - 4 ] - :', 'test');
  console.log('[ AnimationContainer.tsx - 4 ] - :', 'test 1');
  console.log('[ AnimationContainer.tsx - 4 ] - :', 'test 1');

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
    ></motion.div>
  );
};

export default AnimatedContainer;

interface AnimatedContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}
