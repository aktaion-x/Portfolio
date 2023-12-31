import { motion } from "framer-motion";
function ContactDetails() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Details</h2>
      <ul className='whitespace-nowrap'>
        <li className='flex flex-col mb-2'>
          <span className='font-medium'>Email:</span>
          <motion.a target='_blank' whileHover={{ textDecoration: "underline" }} href='mailto:ghassan.athamin@gmail.com' className='md:ml-3 text-sm -mt-[1px]'>ghassan.athamin@gmail.com</motion.a>
        </li>
        <li className='flex flex-col mb-2'>
          <span className='font-medium'>Linkedin:</span>
          <motion.a target='_blank' whileHover={{ textDecoration: "underline" }} href='https://www.linkedin.com/in/ghassan-athamin' className='md:ml-3 text-sm -mt-[1px]'>https://www.linkedin.com/in/ghassan-athamin</motion.a>
        </li>
        <li className='flex flex-col mb-2'>
          <span className='font-medium'>Github:</span>
          <motion.a target='_blank' whileHover={{ textDecoration: "underline" }} href='https://github.com/aktaion-x' className='md:ml-3 text-sm -mt-[1px]'>https://github.com/aktaion-x</motion.a>
        </li>
        <li className='flex flex-col mb-2'>
          <span className='font-medium'>Phone:</span>
          <span className='md:ml-3 text-sm -mt-[1px]'>+962780222977</span>
        </li>
        <li className='flex flex-col mb-2'>
          <span className='font-medium'>Based in:</span>
          <span className='md:ml-3 text-sm -mt-[1px]'>Jordan, Amman</span>
        </li>
      </ul>
    </div>
  );
}

export default ContactDetails;
