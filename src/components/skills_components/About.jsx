import HeaderTopGoBack from "../custom/HeaderTopGoBack";
import { PiHandWavingBold } from "react-icons/pi";
import { FaEarthAfrica } from "react-icons/fa6";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { IoBug } from "react-icons/io5";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { IoMdGitBranch } from "react-icons/io";
import { GiPin } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";

import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

//import images for testimonials
import personOne from "../images/person1.jpeg";
import personTwo from "../images/person2.jpeg";
import personThree from "../images/person3.jpeg";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <HeaderTopGoBack />
      <div className="bullets">
        <div className="bullet-div">
          <h2>
            About Me <FaUser />
          </h2>
          <div className="bullets-detail">
            <h3>
              Hi, there{" "}
              <PiHandWavingBold style={{ color: "var(--about-color)" }} />
            </h3>
            <p>
              Welcome to my portfolio! I&apos;m a 22-years-old programmer who
              has been immersed in the world of coding for over two years now.
              During this time, I&apos;ve had the opportunity to create a few
              JavaScript and its frameworks projects, which I may jokingly
              describe as &quot;shitty,&quot; but I&apos;m proud of the fact
              that I successfully brought them to life. These projects have
              allowed me to explore new technologies and gain valuable hands-on
              experience. My primary focus lies in web development, with a
              particular emphasis on frontend work. I&apos;m currently juggling
              multiple projects, each presenting unique challenges that fuel my
              passion for learning and growth.
            </p>
            <p>
              One of the aspects I enjoy the most in programming is the
              challenge of recreating intricate functionalities found in
              established JavaScript packages. This process not only helps me
              grasp complex algorithms but also enhances my problem-solving
              abilities. I&apos;m fascinated by the logical underpinnings that
              power these functionalities and I find joy in dissecting and
              understanding their inner workings.
            </p>
            <p>
              To sum it up, I&apos;m a passionate and driven programmer,
              constantly seeking opportunities to expand my knowledge and
              skills. Through my dedication to frontend development, my ongoing
              projects, my familiarity with popular libraries/frameworks, and my
              fascination with algorithms and logic, I&apos;m laying a solid
              foundation for a successful career in web development. I&apos;m
              excited about the future as I continue to refine my skills, gain
              professional experience, and contribute to the ever-evolving world
              of technology.
            </p>
          </div>
        </div>
        <div className="bullet-div">
          <h2>
            Areas of Interest
            <GiPin />
          </h2>
          <div className="bullets-detail">
            <h3
              style={{
                display: "flex",
                flexFlow: "column",
              }}>
              <FaEarthAfrica
                style={{ color: "var(--about-color)", fontSize: "2rem" }}
              />
              Web Development
            </h3>
            <p>
              Transforming UI/UX designs into scalable, easily accessible and
              responsive web app while maintaining best practices...
            </p>
          </div>
          <div
            className="bullets-detail-one"
            style={{ display: "flex", flexFlow: "column", gap: "1.5vh" }}>
            <h3
              style={{
                display: "flex",
                flexFlow: "column",
              }}>
              <HiDevicePhoneMobile
                style={{ color: "var(--about-color)", fontSize: "2rem" }}
              />
              Mobile App Development
            </h3>
            <p>
              Crafting Up cross platforms &#x28;Android & Ios&#x29; Applications
              with Javascript framework
              <span style={{ display: "flex", alignItems: "center" }}>
                <FaReact style={{ color: "#61DAFB" }} /> React Native
              </span>
            </p>
          </div>
          <div
            className="bullets-detail-one"
            style={{ display: "flex", flexFlow: "column", gap: "1.5vh" }}>
            <h3
              style={{
                display: "flex",
                flexFlow: "column",
              }}>
              <IoBug
                style={{ color: "var(--about-color)", fontSize: "2rem" }}
              />
              Testing and Debugging
            </h3>
            <p>
              With deep understanding of my core technologies, the web browser
              console and use of extensions & other tools, i can validate my
              code, verify its free of bugs and easily fix any errors that may
              ruin or slow down the application...
            </p>
          </div>
          <div
            className="bullets-detail-one"
            style={{ display: "flex", flexFlow: "column", gap: "1.5vh" }}>
            <h3
              style={{
                display: "flex",
                flexFlow: "column",
              }}>
              <IoMdGitBranch
                style={{ color: "var(--about-color)", fontSize: "2rem" }}
              />
              Version Control
            </h3>
            <p>
              Ability to track and control changes that are made to the code
              with my core understanding of Git and GitHub
            </p>
          </div>
        </div>
        <div className="bullet-div">
          <h2>
            Testimonials <MdOutlineReviews />
          </h2>
          <div className="bullets-detail">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper">
              <SwiperSlide className="swiper-slide">
                <p style={{ color: "var(--header-color)" }}>
                  &quot;Thank you for such a beautiful website, our company
                  would love to keep working with you&quot;
                </p>
                <div>
                  <img alt="testimonials" loading="lazy" src={personOne} />
                  <h4>Blaze World</h4>
                  <h5>CEO</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <p style={{ color: "var(--header-color)" }}>
                  &quot;Keep up the good work... my company&apos; customers
                  reviews are through the roof&quot;
                </p>
                <div>
                  <img alt="testimonials" loading="lazy" src={personTwo} />
                  <h4>Josh Cavil</h4>
                  <h5>M.D</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <p style={{ color: "var(--header-color)" }}>
                  &quot;My brand&apos;s productivity and recognition has
                  increased since deploying our website... Thanks&quot;
                </p>
                <div>
                  <img alt="testimonials" loading="lazy" src={personThree} />
                  <h4>Ella Designs</h4>
                  <h5>CEO</h5>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="bullet-div">
          <h2>
            Experiences <GrUserWorker />
          </h2>
          <div className="bullets-detail">
            <p>
              I spent most of developer years working as a Freelancer, gathering
              experiences and improving my skills... i later taught at a summer
              school where i help the students understand the world of web
              development and helped them build their first responsive web page.
            </p>
            <p>
              I was also a private tutor where i privately taught my student web
              development
            </p>
          </div>
        </div>
        <div className="bullet-div">
          <h2>
            Skills <FaTools />
          </h2>
          <div className="bullets-detail">
            <div>
              <h3
                style={{
                  display: "flex",
                  flexFlow: "column",
                }}>
                <CgWebsite
                  style={{ color: "var(--about-color)", fontSize: "2rem" }}
                />
                Front End
              </h3>
              <div className="front-end">
                <div className="html">
                  <h4 style={{ color: "#E5532D" }}>
                    <FaHtml5 /> HTML
                  </h4>
                  <div className="pro"></div>
                </div>
                <div className="css">
                  <h4 style={{ color: "#2D53E5" }}>
                    <FaCss3 /> CSS
                  </h4>
                  <div className="pro"></div>
                  <div className="frameworks">
                    <div>
                      <FaBootstrap style={{ color: "#901AFF" }} />
                    </div>
                    <div>
                      <SiTailwindcss style={{ color: "#0C9CB9" }} />
                    </div>
                  </div>
                </div>
                <div className="javascript">
                  <h4 style={{ color: "#F3DD55" }}>
                    <SiJavascript /> JavaScript
                  </h4>
                  <div className="pro"></div>
                  <div className="frameworks">
                    <div>
                      <FaReact style={{ color: "#1082A7" }} />
                    </div>
                    <div>
                      <TbBrandNextjs style={{ color: "#7A50BE" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3
                style={{
                  display: "flex",
                  flexFlow: "column",
                }}>
                <FaDatabase
                  style={{ color: "var(--about-color)", fontSize: "2rem" }}
                />
                Back End
              </h3>
              <div className="back-end">
                <div>
                  <h4 style={{ color: "#529F41" }}>
                    <FaNodeJs />
                    NodeJS
                  </h4>
                  <div className="pro"></div>
                </div>
                <div>
                  <h4 style={{ color: "var(--header-color)" }}>
                    <SiExpress />
                    Express
                  </h4>
                  <div className="pro"></div>
                </div>
                <div>
                  <h4 style={{ color: "#0B582F" }}>
                    <SiMongodb />
                    MongoDB
                  </h4>
                  <div className="pro"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
