import { Link as ScrollLink } from "react-scroll";
import { MdWindow, MdMonitor } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { useState, useEffect, useCallback, useRef } from "react";
import throttle from "lodash/throttle";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight;

    if (headerRef.current && scrollPosition >= headerRef.current.offsetTop) {
      setActiveSection("header");
    } else if (
      skillsRef.current &&
      scrollPosition >= skillsRef.current.offsetTop
    ) {
      setActiveSection("skills");
    } else if (
      projectsRef.current &&
      scrollPosition >= projectsRef.current.offsetTop
    ) {
      setActiveSection("projects");
    } else if (
      contactRef.current &&
      scrollPosition >= contactRef.current.offsetTop
    ) {
      setActiveSection("contact-me");
    }
  }, [headerRef, skillsRef, projectsRef, contactRef]);

  useEffect(() => {
    const throttledScrollHandler = throttle(handleScroll, 100); // Adjust the throttle time as needed

    window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [handleScroll]);

  return (
    <nav className="nav-bar">
      <ul>
        <li className={activeSection === "header" ? "active" : ""}>
          <ScrollLink
            to="header"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}>
            <MdWindow />
          </ScrollLink>
        </li>
        <li className={activeSection === "skills" ? "active" : ""}>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={10}>
            <FaCode />
          </ScrollLink>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={10}>
            <MdMonitor />
          </ScrollLink>
        </li>
        <li className={activeSection === "contact-me" ? "active" : ""}>
          <ScrollLink
            to="contact-me"
            smooth={true}
            duration={200}
            spy={true}
            offset={10}>
            <LuMessagesSquare />
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
