import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion';
import React, { useState } from 'react';
import useUser from '../../hooks/useUser';

function Login() {
  const { loginUser, isPending, error } = useUser()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      await loginUser({ email, password })
    }
  }
  return (
    <div className='w-full'>
      <motion.div
        className='dark:bg-[#1a1a1a7a] bg-[#ebebeb8c] border border-[#ffffff17] h-fit px-8 py-10 max-w-[500px] w-full mx-auto rounded-lg '
        variants={fadeIn('left', 'spring', 0.1, 1)}
      >
        <h1 className='mx-auto w-fit text-4xl mb-10 font-bold'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <label className='flex flex-col gap-1'>
            <span className='font-medium'>E-mail:</span>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' autoFocus />
          </label>
          <label className='flex flex-col gap-1'>
            <span className='font-medium'>Password:</span>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' />
          </label>
          {error && <div className='text-red-700 mt-5'><span className='underline font-semibold'>Error:</span>{error}</div>}
          <motion.button
            whileTap={{ scale: .9 }}
            whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
            disabled={isPending}
            className='px-8 py-2 w-fit mx-auto mt-14 rounded-lg border-slate-400 border-2 font-semibold'
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
