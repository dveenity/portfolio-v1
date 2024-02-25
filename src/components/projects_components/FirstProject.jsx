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
import FirstImage from "../images/agro.png";
import SecondImage from "../images/agro2.png";
import ThirdImage from "../images/agro3.png";

const FirstProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const live = `https://agro-farmers-hub.vercel.app/`;
  const github = `https://github.com/dveenity/farmers-hub`;

  return (
    <div className="project-click">
      <HeaderTopGoBack />
      <div className="project-click-details">
        <h2>Agro Farmer&apos;s Hub</h2>
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
            <li style={{ color: "white" }}>#ReactJS</li>
            <li style={{ color: "orange" }}>#NodeJS</li>
            <li style={{ color: "white" }}>#Express</li>
            <li style={{ color: "green" }}>#MongoDB</li>
          </ul>
        </div>
        <div className="p-outline">
          <div>
            <h3>What I did;</h3>
            <ul>
              <li>
                <p>
                  <TbPointFilled />
                  As an advocate for sustainable agriculture and
                  community-driven initiatives, I developed Agro Farmer&apos;s
                  Hub, an innovative web application designed to bridge the gap
                  between farmers and consumers. Agro Farmer&apos;s Hub serves
                  as a digital marketplace where farmers can showcase their
                  products, share insights into their farming practices, and
                  engage with a broader audience.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Direct Farmer-Consumer Interaction:</strong> Agro
                  Farmer&apos;s Hub enables direct communication between farmers
                  and consumers, fostering transparency and trust within the
                  agricultural supply chain.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Farming Activities Updates:</strong> Through Agro
                  Farmer&apos;, farmers can provide real-time updates on their
                  farming activities, offering users a glimpse into the
                  behind-the-scenes process of agricultural production.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Availability Calendar:</strong> A dynamic calendar
                  feature allows farmers to showcase product availability,
                  helping users plan their purchases in advance and stay
                  informed about seasonal offerings.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>User-Friendly Interface:</strong> With a clean and
                  intuitive interface, Farm2Table ensures a seamless user
                  experience, whether users are browsing products, placing
                  orders, or engaging with farming updates.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Community Building:</strong> Agro Farmer&apos;s Hub
                  goes beyond a simple marketplace by fostering a sense of
                  community among users and farmers, creating a platform for
                  knowledge-sharing and collaboration.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Project Outcome</h3>
            <p>
              By bringing farmers and consumers together on a single platform,
              Farm2Table empowers local agriculture, promotes sustainability,
              and strengthens community resilience. Through this project, I aim
              to contribute to a more equitable and transparent food system
              while supporting the livelihoods of small-scale farmers.
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

export default FirstProject;
