import { motion } from 'framer-motion'
import { useState } from 'react';

function Technologies({ technologiesState }: { technologiesState: [string[], React.Dispatch<React.SetStateAction<string[]>>] }) {
  const [technology, setTechnology] = useState("")
  const [technologies, setTechnologies] = technologiesState;

  const handleAddTechnology = () => {
    if (technology) {
      setTechnologies((t) => [...t, technology])
      setTechnology("")
    }
  }
  const handleRemoveTechnology = (t: string) => {
    setTechnologies(technologies.filter(tech => tech !== t))
  }


  return (
    <>
      <div className='dark:bg-[#91919114] bg-white rounded outline-none border border-transparent flex'>
        <input value={technology} onChange={(e) => setTechnology(e.target.value)} type="text" className='bg-transparent rounded w-full outline-none  focus:border-slate-400 border border-transparent px-2 py-1' autoFocus />
        <button onClick={handleAddTechnology} type='button' className='ml-3 px-2 '>Add</button>
      </div>
      <ul className="flex flex-wrap gap-1">
        {technologies.map((t) =>
          <motion.li whileHover={{ backgroundColor: "#F00" }} className="px-[5px] py-[2px] text-sm bg-slate-900 text-white rounded cursor-pointer" key={Math.random()}>
            <span onClick={() => handleRemoveTechnology(t)}>
              {t}
            </span>
          </motion.li>
        )}
      </ul>
    </>
  );
}

export default Technologies;
