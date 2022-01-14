import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
}

const Slideshow = ({ children }: Props) => {
  const [translate, setTranslate] = useState<number>(0);
  const increment: number = -160 * translate;
  const variants = {
    translate: { x: increment, transition: { duration: 2, ease: 'easeInOut' } },
    stop: { x: 0 }
  };

  function onClickHandlerIncrement(event: React.MouseEvent<HTMLDivElement>) {
    setTranslate(translate + 1);
    event.stopPropagation();
    event.preventDefault();
  }

  function onClickHandlerDecrement(event: React.MouseEvent<HTMLDivElement>) {
    if (translate != 0) {
      setTranslate(translate - 1);
      event.stopPropagation();
      event.preventDefault();
    }
    event.stopPropagation();
    event.preventDefault();
  }

  return (
    <>
      <motion.div
        variants={variants}
        animate={{ x: increment }}
        transition={{ duration: 2, ease: 'easeInOut' }}>
        {children}
      </motion.div>
      <div onClick={onClickHandlerIncrement}>Click Left</div>
      <div onClick={onClickHandlerDecrement}>Click Right</div>
    </>
  );
};

export default Slideshow;
