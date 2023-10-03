import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Icon from "../assets/Icon";
import Modal from './Modal';
import useUser from '../hooks/useUser';
import useAuthContext from '../hooks/useAuthContext';

function Navbar() {
  const { dispatch } = useContext(ThemeContext)!;
  const { logoutUser } = useUser()
  const { userData } = useAuthContext()
  const [navOpen, setNavOpen] = useState(false)
  const handleThemeToggle = () => dispatch({ type: 'SWITCH' });
  const handleNavOpen = () => setNavOpen(true);
  const handleNavClose = () => setNavOpen(false);

  return (
    <div className="fixed z-50 w-full left-1/2 -translate-x-1/2 dark:bg-[#000000b3] bg-[#ebebebb3] dark:text-white rounded-b border-b border-[#ffffff17] ">
      <div className="px-3 md:px-10 max-w-[1300px] mx-auto my-2">
        <nav className="px-5 py-3 flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-extralight"><Link className='logo' to='/'>Ghassan Athamin</Link></div>
          <div className="flex justify-between items-center md:w-2/5">
            <ul className='nav-links hidden md:flex text-gray-800 dark:text-gray-300 justify-between items-center w-full'>
              <li className="text-lg font-medium"><NavLink to='/about'>About</NavLink></li>
              <li className="text-lg font-medium"><NavLink to='/projects'>Projects</NavLink></li>
              <li className="text-lg font-medium"><NavLink to='/skills'>Skills</NavLink></li>
              <li className="text-lg font-medium"><NavLink to='/contact'>Contact</NavLink></li>
              {userData && <li className="text-lg font-medium"><button onClick={() => logoutUser()}>Logout</button></li>}
            </ul>
            <motion.button
              whileTap={{
                scale: .9,
              }}
              whileHover={{
                scale: 1.1,
              }}
              className="text-lg cursor-pointer dark:text-white text-black ml-5 lg:ml-9 rounded-full p-1"
              onClick={handleThemeToggle}
            >
              <Icon name="TOGGLE_DARK" className="w-7" />
            </motion.button>
            <motion.button
              whileTap={{ scale: .9 }}
              className="text-lg cursor-pointer ml-5 md:hidden block"
              onClick={() => (navOpen ? handleNavClose() : handleNavOpen())}
            >
              <Icon name="MENU" className="w-7" />
            </motion.button>
          </div>
        </nav>
      </div>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {navOpen &&
          <Modal className='w-9/12 bg-[#ebebeb] px-5 py-5 text-black relative -mt-96' handleClose={handleNavClose}>
            <ul className='dropdown-nav-links flex text-gray-800 flex-col gap-2 font-semibold'>
              <li onClick={handleNavClose} className="text-lg font-medium"><NavLink to='/about'>About</NavLink></li>
              <li onClick={handleNavClose} className="text-lg font-medium"><NavLink to='/projects'>Projects</NavLink></li>
              <li onClick={handleNavClose} className="text-lg font-medium"><NavLink to='/skills'>Skills</NavLink></li>
              <li onClick={handleNavClose} className="text-lg font-medium"><NavLink to='/contact'>Contact</NavLink></li>
              {userData && <li className="text-lg font-medium"><button onClick={() => logoutUser()}>Logout</button></li>}
            </ul>
          </Modal>}
      </AnimatePresence>
    </div>
  );
}


export default Navbar;