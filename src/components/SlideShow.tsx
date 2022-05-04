import React, { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from 'react-icons/all';

// @ts-ignore
import * as dashboardStyles from '../styles/Dashboard.module.css';

interface Props {
  children: ReactNode;
  className?: string;
  numberOfItems: number;
  isDashboard: boolean;
}

const SlideShow = ({ children, numberOfItems, isDashboard, className }: Props) => {
  const [translate, setTranslate] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const increment: number = -160 * translate;

  const dashboardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    translate: { x: increment, transition: { duration: 2, ease: 'easeInOut' }, opacity: 1 }
  };

  const navbarVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    translate: { opacity: 1 }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onClickHandlerIncrement = (event: React.MouseEvent<HTMLDivElement>) => {
    if (translate != numberOfItems - 1) {
      setTranslate(translate + 1);
      event.stopPropagation();
      event.preventDefault();
    }
    event.stopPropagation();
    event.preventDefault();
  };

  const onClickHandlerDecrement = (event: React.MouseEvent<HTMLDivElement>) => {
    if (translate != 0) {
      setTranslate(translate - 1);
      event.stopPropagation();
      event.preventDefault();
    }
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <>
      <motion.div
        variants={isDashboard ? dashboardVariants : navbarVariants}
        initial={isDashboard ? 'hidden' : 'visible'}
        animate={isLoading ? 'hidden' : 'visible' && 'translate'}
        className={className}
      >
        {children}
      </motion.div>

      <div className={dashboardStyles.sliderArrows} style={isDashboard ? {} : { display: 'none' }}>
        <motion.div
          whileHover={{ scale: 1.3 }}
          className={dashboardStyles.sliderArrow}
          onClick={onClickHandlerDecrement}
        >
          <FaAngleLeft />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          className={dashboardStyles.sliderArrow}
          onClick={onClickHandlerIncrement}
        >
          <FaAngleRight />
        </motion.div>
      </div>
    </>
  );
};

export default SlideShow;
