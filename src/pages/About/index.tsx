import { Tilt } from "react-tilt";
import { options as tiltOption } from "../../utils/tilt";
import { motion } from 'framer-motion'
import { textVariant, fadeIn, staggerContainer } from '../../utils/motion'
import { Link } from "react-router-dom";

function Index() {
  return (
    <motion.div
      variants={staggerContainer(.1, .1)}
      initial='hidden'
      animate='show'
      viewport={{ once: true, amount: 0 }}
      className="dark:text-white max-w-[1400px] mx-auto px-10 pb-32 pt-36"
    >
      <motion.div variants={textVariant(0)}>
        <h1 className="text-4xl font-semibold mb-10">About me</h1>
      </motion.div>
      <div className='flex gap-14 text-center md:text-start flex-col-reverse md:flex-row'>
        <motion.div className='mt-3 flex flex-col gap-8 w-full' variants={fadeIn("", "spring", 0.1, 1)}>
          <div>
            <h2 className='text-2xl font-medium'>whoami</h2>
            <p className='dark:text-gray-300'>Hi Glad you are here! My name is Ghassan, a passionate and collaborative web developer who is dedicated to creating user-friendly and innovative websites that enhance the online experience! I have hands-down experience with multiple programming paradigms (MVC, APIs, SPA, etc.) and different CS fields (OSs, Networking, Hardware, etc.). Although I'm a self-taught programmer, I was always amazed at technology and computers from a very young age, always trying to learn new stuff, trying different operating systems, learning programming languages... a Tech obsessor!</p>
          </div>
          <div>
            <h2 className='text-2xl font-medium'>Career transition</h2>
            <p className='dark:text-gray-300'>I've studied multimedia design; I liked it and i didn't! I like to build visually stunning things, but i also like to build complicated systems! I worked as a graphic designer at different companies and as a freelancer, but I always want something much more complex to spend my life with! <br />
              anyway, if you think about hiring or just wanna talk feel free to <Link to='/contact' className="underline dark:text-white">contact me</Link>.</p>
          </div>
        </motion.div>
        <motion.div
          className='dark:bg-[#1a1a1a7a] shadow-lg bg-[#ebebeb8c] border border-[#ffffff17] h-fit p-5 max-w-[500px] mx-auto md:mx-[initial] rounded-lg'
          variants={fadeIn('left', 'spring', 0.1, 1)}
        >
          <Tilt options={tiltOption}>
            <img className='rounded-full shadow-lg shadow-zinc-400 dark:shadow-black' src="/my-img.png" alt="" />
          </Tilt>
        </motion.div>
      </div>
      <motion.div className='mt-8 flex flex-col w-full justify-between' variants={fadeIn("", "spring", 0.1, 1)}>
        <h2 className='text-2xl font-medium'>About this portfolio</h2>
        <p className='dark:text-gray-300 mb-3'>this portfolio is a Single Page Application (SPA) using React on the frontend and Express.js as the API</p>
        <div className='flex flex-col gap-3'>
          <div>
            <h3 className='font-medium text-lg mb-1'>Frontend:</h3>
            <ul className='list-disc ml-5'>
              <li>using React with Typescript for developing the frontend experience.</li>
              <li>using Three.js and React Three Fiber for creating the 3D objects.</li>
              <li>using Axios to fetch the projects rom the backend.</li>
              <li>using framer-motion and react-tilt to make a dynamic animation.</li>
              <li>using Tailwind-css as the CSS framework.</li>
              <li>using <a target="_blank" className="underline" href="http://EmailJS.com">EmailJS.com</a> to send email directly from the frontend</li>
            </ul>
          </div>
          <div>
            <h3 className='font-medium text-lg mb-1'>Backend:</h3>
            <ul className='list-disc ml-5'>
              <li>using Express along side with Typescript at the backend to let me get, create, edit and disable projects from the portfolio.</li>
              <li>using MongoDB and mongoose as the Database and ORM.</li>
              <li>using Multer and Cloudinary to let upload images to the cloud.</li>
              <li>using JWT as an authentication method.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>

  );
}

export default Index;
