import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion';
import { useRef } from 'react'

function ContactForm() {
  const form = useRef(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(import.meta.env.SERVICE_ID);

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current!, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <motion.div
      className='dark:bg-[#1a1a1a7a] bg-[#ebebeb8c] border border-[#ffffff17] h-fit px-8 py-5 max-w-[500px] w-full mx-auto md:mx-[initial] rounded-lg'
      variants={fadeIn('left', 'spring', 0.1, 1)}
    >
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Name:</span>
          <input name='user_name' type="text" className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>E-mail:</span>
          <input name='user_email' type="email" className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Message:</span>
          <textarea name='message' className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1 h-36' />
        </label>
        <motion.button
          whileTap={{ scale: .9 }}
          whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
          className='px-8 py-2 w-fit mx-auto mt-14 rounded-lg border-slate-400 border-2 font-semibold'
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ContactForm;
