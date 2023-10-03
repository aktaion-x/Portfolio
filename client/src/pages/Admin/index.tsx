import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion';
import Login from './Login';
import Dashboard from './Dashboard';
import useAuthContext from '../../hooks/useAuthContext';

function Admin() {
  const { userData } = useAuthContext();

  return (
    <motion.div
      variants={staggerContainer(.1, .1)}
      initial='hidden'
      animate='show'
      viewport={{ once: true, amount: 0 }}
      className="dark:text-white max-w-[1400px] mx-auto px-10 pb-32 pt-36"
    >
      {!userData && <Login />}
      {userData && <Dashboard />}
    </motion.div>
  );
}

export default Admin;
