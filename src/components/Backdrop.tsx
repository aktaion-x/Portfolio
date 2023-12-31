import { motion } from 'framer-motion'
import React from 'react';

function Backdrop({ children, handleClick }: { children: React.ReactNode, handleClick: () => void }) {
  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      handleClick()
    }
  })
  return (
    <motion.div
      className='absolute top-0 left-0 h-screen w-full z-50 bg-[#000000e1] flex justify-center items-center'
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
