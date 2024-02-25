import NavBar from "./NavBar";
import { MdWindow } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiper.css";

// import required modules
import { Autoplay } from "swiper/modules";

//import images for projects
import todoOne from "../images/todo-one.png";
import todoTwo from "../images/todo-two.png";
import bankImage from "../images/bank.png";
import weatherApp from "../images/weather.png";
import rajLandingPage from "../images/raj.png";
import calculatorOne from "../images/cal-light.png";
import calculatorTwo from "../images/cal-dark.png";
import hackathonPic from "../images/hackathon.png";

const Hero = () => {
  const whatsapp = "https://wa.me/+2348187047980";

  // images variables
  const todoDark = todoOne;
  const todoLight = todoTwo;
  const bank = bankImage;
  const weather = weatherApp;
  const rajPage = rajLandingPage;
  const calculatorLight = calculatorOne;
  const calculatorDark = calculatorTwo;
  const hackathon = hackathonPic;

  return (
    <div className="header-hero">
      <NavBar />
      <div className="header-dev">
        <div className="header-dev-sub">
          <h2>Highlights of My Projects</h2>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper">
            <SwiperSlide>
              <a href="#todo">
                <img alt="project sample image" src={todoDark} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#todo">
                <img alt="project sample image" src={todoLight} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#bank">
                <img alt="project sample image" src={bank} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a>
                <img alt="project sample image" src={weather} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#blaze">
                <img alt="project sample image" src={rajPage} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#cal">
                <img alt="project sample image" src={calculatorDark} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#cal">
                <img alt="project sample image" src={calculatorLight} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a>
                <img alt="project sample image" src={hackathon} />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="header-hero-detail">
          <h1>
            <MdWindow style={{ color: "blue" }} />
            Developer
          </h1>
          <div className="header-detail-one">
            <div>
              <div>
                <span>&lt;h1&gt;</span>
                <h2>
                  Hi, I&apos;m <span>David</span>,
                  <br />
                  Full-Stack Developer
                </h2>
                <span>&lt;/h1&gt;</span>
              </div>
              <div>
                <span>&lt;p&gt;</span>
                <p>
                  I help business grow by crafting amazing web experiences. If
                  you&apos;re looking for a developer that likes to get stuff
                  done,
                </p>
                <span>&lt;/p&gt;</span>
              </div>
            </div>
            <p>
              <a href={whatsapp}>
                Let&apos;s Talk
                <LuMessagesSquare className="message-icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
