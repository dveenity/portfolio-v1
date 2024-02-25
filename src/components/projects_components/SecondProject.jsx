import { useEffect } from "react";
import HeaderTopGoBack from "../custom/HeaderTopGoBack";
import { TbPointFilled } from "react-icons/tb";
import { IoEarth } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiper.css";

// import required modules
import { Autoplay } from "swiper/modules";

//importing project images for slideshow
import FirstImage from "../images/raj.png";
import SecondImage from "../images/raj2.png";
import ThirdImage from "../images/raj3.png";

const SecondProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const live = `https://blazehackingworld.netlify.app/`;
  const github = `https://github.com/dveenity/Blaze-hacking-world`;

  return (
    <div className="project-click">
      <HeaderTopGoBack />
      <div className="project-click-details">
        <h2>Todo App</h2>
        <div className="p-swipe">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper">
            <SwiperSlide>
              <img alt="project sample image" src={FirstImage} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="project sample image"
                src={SecondImage}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="project sample image" src={ThirdImage} loading="lazy" />
            </SwiperSlide>
          </Swiper>
          <ul>
            <li style={{ color: "orange" }}>#HTML</li>
            <li style={{ color: "blue" }}>#CSS</li>
            <li style={{ color: "purple" }}>#BootStrap</li>
            <li style={{ color: "yellow" }}>#Javascript</li>
          </ul>
        </div>
        <div className="p-outline">
          <div>
            <h3>What I did;</h3>
            <ul>
              <li>
                <p>
                  <TbPointFilled />
                  Developed a revolutionary web app for a renowned Tech company
                  that explains to it users, potential companies the services
                  the company offers.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  Built the UI with{" "}
                  <span style={{ color: "orange" }}>HTML</span> and styled it
                  with <span style={{ color: "blue" }}>CSS</span>, i also used{" "}
                  <span style={{ color: "purple" }}>BootStrap</span> to further
                  make the layout smoother and better... I used{" "}
                  <span style={{ color: "yellow" }}>JavaScript</span> to make
                  the site alive and run functions, i also implored{" "}
                  <span style={{ color: "red" }}>emailJS</span> to receive mail
                  messages/feedbacks from customers & visitors alike.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  Worked closely with the employer to make sure the web app is
                  tailored exactly the way the company wants.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Project Outcome</h3>
            <p>
              The web app is currently live and has helped the company reached a
              new milestone...
            </p>
            <p>
              Feel free to explore the web live and also view its source code on
              GitHub
            </p>
          </div>
        </div>
        <div>
          <a href={live}>
            <IoEarth style={{ color: "blue" }} />
            View Site
          </a>
          <a href={github}>
            <FaGithub style={{ color: "brown" }} />
            View GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondProject;
