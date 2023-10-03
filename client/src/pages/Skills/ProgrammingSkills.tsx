import SkillIcons from "../../assets/SkillIcons";

function ProgrammingSkills() {
  return (
    <div className='mb-5'>
      <h2 className='text-xl font-bold mb-1'>Programming Languages & Frameworks</h2>
      <ul className='ml-6'>
        <li className='relative'>
          <SkillIcons className='skill-icon' name="JS" />
          Typescript - ExpressJS - React - JQuery - Mongoose - Jest
        </li>
        <li className='relative'>
          <SkillIcons className='skill-icon' name="PHP" />
          PHP - Laravel
        </li>
        <li className='relative'>
          <SkillIcons className='skill-icon' name="DATABASE" />
          MySQL - SQLite - MongoDB
        </li>
        <li className='relative'>
          <SkillIcons className='skill-icon' name="CSS" />
          Tailwind - Bootstrap
        </li>
        <li className='relative'>
          <SkillIcons className='skill-icon' name="CSHARP" />
          C# - .NET - ASP.NET (Basics)
        </li>
        <li className='relative'>
          <SkillIcons className='skill-icon' name="PYTHON" />
          Python (Basic)
        </li>
      </ul>
    </div>
  );
}

export default ProgrammingSkills;
