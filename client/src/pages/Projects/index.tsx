import Card from "./Card";
import { textVariant, fadeIn, staggerContainer } from '../../utils/motion'
import { motion } from "framer-motion";
import useProject from "../../hooks/useProject";
import { useEffect, useState } from "react";
import { Project } from "../../types/project";


function Index() {
  const [projects, setProjects] = useState<Project[]>([])
  const { getProjects, isPending, error } = useProject()
  useEffect(() => {
    const get = async () => {
      const res = await getProjects();
      if (res?.status === 200) {
        console.log(res.data.data)
        setProjects([...res.data.data])
      }
    }
    get()
  }, [])
  return (
    <motion.div
      variants={staggerContainer(.1, .1)}
      initial='hidden'
      animate='show'
      viewport={{ once: true, amount: 0 }}
      className="dark:text-white max-w-[1400px] mx-auto px-10 pb-32 pt-36"
    >
      <motion.div variants={textVariant(0)}>
        <h1 className="text-4xl font-semibold">Projects</h1>
      </motion.div>
      <motion.div variants={fadeIn("", "spring", 0.1, 1)} className='mt-3'>
        <h2 className="text-lg font-medium">Brief Introduction</h2>
        <p className="font-light">My portfolio showcases unique personal projects that highlight my skills in coding, design, and problem-solving. Explore my digital creations!        </p>
      </motion.div>
      <div className='flex flex-wrap items-center gap-x-5 gap-y-10 mt-10 justify-center'>
        {projects.map((project, index) => (
          <Card key={Math.random()} index={index} project={project} />
        ))}
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div className='text-red-700 mt-5'><span className='underline font-semibold'>Error:</span> {error}</div>}
    </motion.div>
  );
}

export default Index;
