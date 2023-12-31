import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import AddProject from "./ManageProject/Add";
import EditProject from "./ManageProject/Edit";
import { Project } from '../../types/project';
import useProject from "../../hooks/useProject";

function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const { getAdminProjects, disableProject, isPending, error } = useProject()
  const [addPopup, setAddPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project>();
  const [refreshProjects, setRefreshProjects] = useState({});
  const closeAddPopup = () => setAddPopup(false);
  const openAddPopup = () => setAddPopup(true);
  const closeEditPopup = () => setEditPopup(false);
  const openEditPopup = (project: Project) => {
    setEditPopup(true)
    setProjectToEdit(project)
  };

  useEffect(() => {
    const get = async () => {
      const res = await getAdminProjects();
      if (res?.status === 200) {
        setProjects([...res.data.data])
      }
    }
    get()
  }, [refreshProjects])

  const handleDisable = async (id: string) => {
    const res = await disableProject(id);
    if (res?.status === 200) {
      setRefreshProjects({})
    } else {
      console.log(error)
    }
  }

  return (
    <div className='w-full'>
      <h1 className="mx-auto w-fit font-semibold text-4xl ">Dashboard</h1>
      <motion.button
        whileTap={{ scale: .9 }}
        whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
        className='px-8 py-2 w-fit my-5 mr-auto rounded-lg border-slate-400 border-2 font-semibold'
        onClick={openAddPopup}
      >
        Add Project
      </motion.button>
      {addPopup && <AddProject setRefreshProjects={setRefreshProjects} handleClose={closeAddPopup} />}
      {editPopup && projectToEdit && <EditProject project={projectToEdit} setRefreshProjects={setRefreshProjects} handleClose={closeEditPopup} />}
      {isPending && <div>Loading...</div>}
      {error && <div className='text-red-700 mt-5'><span className='underline font-semibold'>Error:</span> {error}</div>}
      <div className="flex gap-5 flex-col">
        {projects.map((project, index) => (
          <div className='px-5 py-3 border bg-[#ffffff17] dark:border-[#ffffff17] border-[#6f6f6f45] rounded-lg w-full flex' key={index}>
            <a target="_blank" href={project.links.live}>
              <img className="w-56 object-cover" src={project.image} alt={project.name} />
            </a>
            <div className="py-3 px-4 flex flex-col justify-between items-start gap-1">
              <h3>
                <a target="_blank" className="text-xl font-bold block" href={project.links.live}>
                  {project.name}
                </a>
              </h3>
              <div>Order: {project.order}</div>
              <div className="flex gap-2">
                {!project.disabled && <motion.button onClick={() => handleDisable(project._id)} whileHover={{ backgroundColor: "#f00", color: "#FFF" }} className="border px-2 py-1 rounded border-red-600 text-red-600">Disable</motion.button>}
                {project.disabled && <motion.button onClick={() => handleDisable(project._id)} whileHover={{ backgroundColor: "#f0f0f0", color: "#000" }} className="border px-2 py-1 rounded border-gray-500 text-gray-500">Enable</motion.button>}
                <motion.button onClick={() => openEditPopup(project)} whileHover={{ backgroundColor: "#16a34a", color: "#FFF" }} className="border px-2 py-1 rounded border-green-600 text-green-600">Edit</motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




export default Dashboard;