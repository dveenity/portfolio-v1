import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";

const Socials = () => {
  const socials = {
    github: "https://github.com/dveenity",
    LinkedIn: "https://www.linkedin.com/in/david-odion-14540a236/",
    Whatsapp: "https://wa.me/+2348187047980",
    Phone: "tel:+2347046745738",
  };

  return (
    <div className="socials">
      <ul>
        <li>
          <a href={socials.github}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={socials.LinkedIn}>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={socials.Whatsapp}>
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href={socials.Phone}>
            <FaPhone />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
