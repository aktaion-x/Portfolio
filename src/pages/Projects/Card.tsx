import { Tilt } from "react-tilt";
import { options as tiltOption } from "../../utils/tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Project } from "../../types/project";
import { useEffect, useState } from "react";


const Card = ({ index, project }: { index: number, project: Project }) => {
  // const [liveUrl, setLiveUrl] = useState("")
  // useEffect(() => {
  //   if (project.links.live) {
  //     setLiveUrl(import.meta.env.VITE_APP + ":" + project.links.live)
  //     console.log({ liveUrl })
  //   }
  // }, [])
  return (
    <Tilt options={tiltOption}>
      <motion.div
        variants={fadeIn("right", "spring", (index / 2) * 0.5, 0.75)}
        className='rounded-lg bg-white border border-transparent dark:border-[#000000b3] overflow-hidden shadow-2xl'>
        <div className='max-w-sm text-black'>
          <a target="_blank" href={project.links.live ? project.links.live : '#'}>
            <img className="w-full object-cover" src={project.image} alt={project.name} />
          </a>
          <div className="py-3 px-4">
            <h3>
              <a target="_blank" className="text-xl font-bold block" href={project.links.live}>
                {project.name}
              </a>
            </h3>
            <h5 className="mt-1 text-sm">
              <span className="font-semibold">Features: </span><span className="font-medium">{project.features}</span>
            </h5>
            <div className="mt-1">
              <h5 className="font-semibold mb-[2px]">Technologies used:</h5>
              <ul className="flex flex-wrap gap-1">
                {project.technologies.map((technology: string) =>
                  <li className="px-[5px] py-[2px] text-sm bg-slate-900 text-white rounded" key={Math.random()}>
                    <span>
                      {technology}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <h5 className="mt-2 text-sm">
              <span className="font-semibold">Description: </span>{project.description}
            </h5>
            <div className="text-sm mt-2">
              {Object.keys(project.links).map((key) => {
                if (project.links[key as keyof typeof project.links]) {
                  if (key === 'live' && project?.links?.live?.length) {
                    // set live url
                    return (
                      <div className="mb-1 font-semibold" key={key}>
                        {key[0].toUpperCase() + key.slice(1)}:{" "}
                        <a target="_blank" className="font-normal hover:underline" href={project?.links.live}>
                          {project?.links.live.length > 35
                            ? project?.links.live.slice(0, 35) + "..."
                            : project?.links.live.slice(0, 35)}
                        </a>
                      </div>
                    )
                  } else {
                    // go as normal
                    return (
                      <div className="mb-1 font-semibold" key={key}>
                        {key[0].toUpperCase() + key.slice(1)}:{" "}
                        <a target="_blank" className="font-normal hover:underline" href={project.links[key as keyof typeof project.links]}>
                          {project.links[key as keyof typeof project.links]!.length > 35
                            ? project.links[key as keyof typeof project.links]!.slice(0, 35) + "..."
                            : project.links[key as keyof typeof project.links]!.slice(0, 35)}
                        </a>
                      </div>
                    )
                  }
                }
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>

  )
};

export default Card;