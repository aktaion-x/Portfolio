import SkillIcons from "../../assets/SkillIcons";

function SoftwareSkills() {
  return (
    <div className='mb-5'>
      <h2 className='text-xl font-bold mb-1'>Software & Familiarly</h2>
      <ul className='ml-6'>
        <li className='relative'>
          {/* <img className='skill-icon' src="/skills-icons/linux.svg" /> */}
          <SkillIcons className='skill-icon' name="LINUX" />
          Linux - Bash - SSH - Vim
        </li>
        <li className='relative'>
          {/* <img className='skill-icon' src="/skills-icons/network.svg" /> */}
          <SkillIcons className='skill-icon' name="NETWORK" />
          Networking (IPv4 - IPv6, TCP/IP Model, DNS)
        </li>
        <li className='relative'>
          {/* <img className='skill-icon' src="/skills-icons/git.svg" /> */}
          <SkillIcons className='skill-icon' name="GIT" />
          Git - Github
        </li>
        <li className='relative'>
          {/* <img className='skill-icon' src="/skills-icons/docker.svg" /> */}
          <SkillIcons className='skill-icon' name="DOCKER" />
          Docker
        </li>
        <li className='relative'>
          {/* <img className='skill-icon' src="/skills-icons/figma.svg" /> */}
          <SkillIcons className='skill-icon' name="FIGMA" />
          Figma - PS
        </li>
      </ul>
    </div>
  );
}

export default SoftwareSkills;
