import {
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { Link } from "react-router-dom";

const Skills = () => {
  //putting skills and icons into an array and mapping into list for easy scalability in the future
  const skills = [
    { icon: <FaHtml5 style={{ color: "orange" }} />, skillName: "HTML" },
    { icon: <IoLogoCss3 style={{ color: "blue" }} />, skillName: "CSS" },
    {
      icon: <FaBootstrap style={{ color: "purple" }} />,
      skillName: "BootStrap",
    },
    {
      icon: <SiTailwindcss style={{ color: "#38BDF8" }} />,
      skillName: "Tailwind",
    },
    {
      icon: <SiJavascript style={{ color: "#F3DD55" }} />,
      skillName: "JavaScript",
    },
    { icon: <SiReact style={{ color: "#149ECA" }} />, skillName: "ReactJS" },
    {
      icon: <TbBrandNextjs style={{ color: "#7A50BE" }} />,
      skillName: "NextJS",
    },
    {
      icon: <FaNodeJs style={{ color: "#529F41" }} />,
      skillName: "NodeJS",
    },
    {
      icon: <SiExpress style={{ color: "var(--header-color)" }} />,
      skillName: "Express",
    },
    { icon: <SiMongodb style={{ color: "#0B582F" }} />, skillName: "MongoDB" },
    { icon: <FaGitAlt style={{ color: "#F34F29" }} />, skillName: "Git" },
    { icon: <FaGithub style={{ color: "#171515" }} />, skillName: "GitHub" },
    {
      icon: <SiVisualstudiocode style={{ color: "#0074B6" }} />,
      skillName: "VS Code",
    },
  ];
  const skillOutput = skills.map((skill, index) => (
    <li key={index}>
      {skill.icon}
      {skill.skillName}
    </li>
  ));

  return (
    <div className="Skills" id="skills" name="skills">
      <div className="skills-one">
        <h2>Skills</h2>
        <p>
          The <span>core technologies</span> i use in my day-to-day, and
          i&apos;m proficient in are:
        </p>
      </div>
      <div>
        <ul>{skillOutput}</ul>
      </div>
      <div>
        <p>
          I&apos;m a <span>Web Developer</span> from Nigeria, who really enjoys
          building <span>scalable</span>, innovative and easily{" "}
          <span>accessible</span> web apps globally.
        </p>
      </div>
      <div>
        <Link to="/about">Click Here to read more About Me...</Link>
      </div>
    </div>
  );
};

export default Skills;
