import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Modal from '../../../components/Modal';
import Technologies from './Technologies';
import Links from './Links';
import useProject from '../../../hooks/useProject';


function AddProject({ handleClose, setRefreshProjects }: { handleClose: () => void, setRefreshProjects: React.Dispatch<React.SetStateAction<object>> }) {
  const { createProject, error, isPending } = useProject()
  const [name, setName] = useState("")
  const [order, setOrder] = useState("")
  const [features, setFeatures] = useState("")
  const [description, setDescription] = useState("")
  const [technologies, setTechnologies] = useState<string[]>([])
  const [links, setLinks] = useState<object>({})
  const [image, setImage] = useState<File | null>(null)
  const [inputError, setInputError] = useState<string | null>(null)


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(image);

    if (!name || !features || !description || technologies.length === 0 || Object.keys(links).length === 0 || !image || !order) {
      setInputError('All Field must be filled')
      return;
    }

    const res = await createProject({ name, description, disabled: false, features, image, links, order: Number(order), technologies })
    if (res?.status === 200) {
      setRefreshProjects({})
      handleClose();
    } else {
      setInputError(error)
    }
  }


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputError(null)
    const file = e.target.files![0];
    if (!file.type.includes('image')) {
      setInputError("File must be a valid image type")
    } else if (file.size > 1_000_000) {
      setInputError("File size must be less than 2MB")
    }
    setImage(file)
  }

  return (
    <Modal className='w-fit bg-[#ebebeb] px-5 py-5 text-black absolute ' handleClose={handleClose}>
      <h1 className='mx-auto w-fit text-4xl mb-10 font-bold'>Add Project</h1>
      <form onSubmit={handleSubmit} className='flex w-[400px] flex-col gap-3'>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Name:</span>
          <input value={name} onChange={e => setName(e.target.value)} type="text" className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' autoFocus required />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Features:</span>
          <input value={features} onChange={e => setFeatures(e.target.value)} type="text" className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' autoFocus required />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Description:</span>
          <input value={description} onChange={e => setDescription(e.target.value)} type="text" className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' autoFocus required />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Order:</span>
          <input value={order} onChange={e => setOrder(e.target.value)} type="text" className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' autoFocus required />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Technologies:</span>
          <Technologies technologiesState={[technologies, setTechnologies]} />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Links:</span>
          <Links linksState={[links, setLinks]} />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-medium'>Image:</span>
          <input type="file" accept="image/*" onChange={handleImageChange} className='dark:bg-[#91919114] rounded outline-none focus:border-slate-400 border border-transparent px-2 py-1' required />
        </label>
        {inputError && <div className='text-red-700 mt-5'><span className='underline font-semibold'>Error:</span> {inputError}</div>}
        <motion.button
          whileTap={{ scale: .9 }}
          whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
          disabled={isPending}
          className='px-8 py-2 w-fit mx-auto rounded-lg mt-5 border-slate-400 border-2 font-semibold'
        >
          Add
        </motion.button>
      </form>
    </Modal>
  );
}
export default AddProject;