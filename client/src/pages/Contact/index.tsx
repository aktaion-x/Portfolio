import { useState } from 'react';
import { textVariant, fadeIn, staggerContainer } from '../../utils/motion'
import { motion } from "framer-motion";
import ContactCanvas from './ContactCanvas';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

function Index() {
  const [largeScreen, setLargeScreen] = useState(window.innerWidth > 992 ? true : false)

  window.addEventListener('resize', () => {
    if (window.innerWidth < 767) {
      setLargeScreen(false)
    } else if (!largeScreen) {
      setLargeScreen(true)
    }
  })


  return (
    <>
      <motion.div
        variants={staggerContainer(.1, .1)}
        initial='hidden'
        animate='show'
        viewport={{ once: true, amount: 0 }}
        className="dark:text-white max-w-[1400px] mx-auto px-10 pb-32 pt-36"
      >
        <motion.div variants={textVariant(0)}>
          <h1 className="text-4xl font-semibold">Contact me</h1>
        </motion.div>
        <div className='mt-3 flex flex-col gap-10 md:flex-row w-full justify-between'>
          <motion.div variants={fadeIn("", "spring", 0.1, 1)}>
            <ContactDetails />
            {largeScreen && (
              <ContactCanvas />
            )}
          </motion.div>
          <ContactForm />
        </div>
      </motion.div>
      <motion.div>
      </motion.div>
    </>
  );
}

export default Index;
