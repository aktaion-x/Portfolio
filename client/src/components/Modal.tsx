import { motion } from 'framer-motion'
import Backdrop from './Backdrop';
import Icon from '../assets/Icon';
import React from 'react';

const dropIn = {
  hidden: {
    x: "-100vw",
    opacity: 0
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 100,
      stiffness: 500
    }
  },
  exit: {
    x: "100vw",
    opacity: 0
  }
}

function Modal({ handleClose, children, className }: { handleClose: () => void, children: React.ReactNode, className: string }) {
  return (
    <Backdrop handleClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={className}
      >
        <motion.div
          className='p-[6px] border-2 text-red-800 border-red-800 w-fit rounded-full absolute right-0 top-0 mr-3 mt-3 cursor-pointer'
          whileTap={{ scale: .9 }}
          onClick={handleClose}
        >
          <Icon name='CLOSE' className='w-3 h-3' />
        </motion.div>
        {children}
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
