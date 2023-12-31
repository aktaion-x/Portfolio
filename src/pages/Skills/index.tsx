import { motion } from 'framer-motion'
import { textVariant, fadeIn, staggerContainer } from '../../utils/motion'
import WebDevelopmentSkills from './WebDevelopmentSkills';
import ProgrammingSkills from './ProgrammingSkills';
import SoftwareSkills from './SoftwareSkills';
import SoftSkills from './SoftSkills';
function Index() {
  return (
    <motion.div
      variants={staggerContainer(.1, .1)}
      initial='hidden'
      animate='show'
      viewport={{ once: true, amount: 0 }}
      className="dark:text-white max-w-[1400px] mx-auto px-10 pb-32 pt-36"
    >
      <div>
        <motion.h1 variants={textVariant(0)} className="text-4xl font-semibold mb-10">Skills</motion.h1>
        <div className='flex justify-between gap-10'>
          <motion.div variants={fadeIn("", "spring", 0.1, 1)} className='flex flex-col cursor-default'>
            <WebDevelopmentSkills />
            <ProgrammingSkills />
            <SoftwareSkills />
            <SoftSkills />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'spring', 0.1, 1)}
            className='bg-[#1a1a1a7a] shadow-lg  border border-[#ffffff17] h-fit p-[2px] max-w-[500px] mx-auto md:mx-[initial] rounded-lg hidden md:block'
          >
            <img src="/big-brain.png" alt="" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Index;
