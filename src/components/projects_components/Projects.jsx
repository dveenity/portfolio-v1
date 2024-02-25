import { Link } from "react-router-dom";

//importing project images
import projectOneImage from "../images/agro.png";
import projectTwoImage from "../images/todo-two.png";
import projectThreeImage from "../images/cal-light.png";
import projectFourImage from "../images/bank.png";

const Projects = () => {
  // putting each project details into an array and mapping into dom
  const projects = [
    {
      image: projectOneImage,
      h3: "Agro Farmer's Hub",
      description:
        "A Full Stack web app where farmers can post their products and users can place orders for those products",
      href: "blaze",
      to: "/first",
      tools: ["#reactJS", "#NodeJS", "#MongoDB", "ExpressJS"],
    },
    {
      image: projectTwoImage,
      h3: "Todo App",
      description:
        "An advanced todo web app with dark/light mode switch and also features tasks history",
      href: "todo",
      to: "/second",
      tools: ["#react", "#routing", "#css"],
    },
    {
      image: projectFourImage,
      h3: "BBNK Bank",
      description:
        "An webpage for an imaginary bank for an idea of what a futuristic bank webpage should look like",
      href: "bank",
      to: "/third",
      tools: ["#react", "#css", "#antUI"],
    },
    {
      image: projectThreeImage,
      h3: "Calculator App",
      description:
        "A simple calculator that that shows results and also shows the inputted values above it",
      href: "cal",
      to: "/fourth",
      tools: ["#html", "#css", "#js"],
    },
  ];

  // Define an array of colors for tools
  const toolColors = [
    "orange",
    "var(--header-color)",
    "yellow",
    "var(--header-color)",
  ];

  const projectOutput = projects.map((project, index) => (
    <li
      key={index}
      id={project.href}
      className={project.href}
      name={project.href}>
      <Link to={project.to}>
        <img alt="project image sample" src={project.image} />
        <div>
          <h3>{project.h3}</h3>
          <div>
            <p>{project.description}</p>
            <div>
              {project.tools.map((tool, index) => (
                <p key={index} style={{ color: toolColors[index] }}>
                  {tool}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className="projects" id="projects" name="projects">
      <div>
        <h2>My Projects</h2>
        <p>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
        <p>Click on each project to read more info and explore it live...</p>
      </div>
      <div className="project-list">
        <ul>{projectOutput}</ul>
      </div>
    </div>
  );
};

export default Projects;
