// import React from 'react'
import Navbar from "./Navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { FaArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { FaArrowUp } from '@fortawesome/free-solid-svg-icons';

import { FaArrowUp } from "react-icons/fa";

import styled from "styled-components";
import React, { useEffect, useState } from "react";

// import $ from 'jquery';
// import Waypoint from 'waypoint';
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <div className="">
        <div className="container-fluid  image">
          <div className="row">
            <Navbar />
          </div>

          <div className="row p-5 main-cont">
            <div className="col-md-12 text-light">
              <p className="">Full Stack Developer</p>
              <div class="text  mt-4">
                <h1 className="ani">
                  <span className="text-light">I am a</span>
                  <div class="message">
                    <div class="word1">Designer </div>
                    <div class="word2">Coder</div>
                    <div class="word3">Developer</div>
                  </div>
                </h1>
              </div>
              <h1 className="intro">
                Hello, I'm <span>Archana</span>, Welcome <br />
                my World.
              </h1>
            </div>
          </div>
        </div>
        {/* ============================================About section==================== */}
        <section id="about" class="about main-cont pt-4 p-5">
          {/* <div class="container" data-aos="fade-up"> */}

          {/* <div class="section-title text-start">
              <h2 className='text-center '>About</h2>
              <p className=''>Hello there! I'm dedicated to transforming online platforms through the power of compelling content. Are you feeling disheartened by low blog traffic or seeking ways to optimize revenue from your blog? Look no further! My expertise lies in conducting thorough SEO research to pinpoint topics that not only rank well but also resonate deeply with your audience. I specialize in crafting exceptional, engaging content precisely designed for your blog or website, ensuring it stands out amidst the digital noise. Let's co
                llaborate to revitalize your blog's traffic, maximize its revenue potential, and establish an online presence that captivates and converts.
                Your platform's success story starts here. Thank you for considering me as your content partner in this exciting journey!
              </p>
              <p><span className='fw-bold text-start'> Enhanced Traffic Strategies:</span> Revitalize your blog's traffic to reach its fullest potential.

              </p>

              <p> <span className='fw-bold '>SEO Research Expertise:</span> Thorough research to identify topics that rank well and resonate with your audience.</p>
              <p> <span className='fw-bold '> Monetization Optimization:</span> Strategize to amplify revenue streams from your blog.</p>
              <p><span className='fw-bold '>Top-notch Content Creation:</span> Crafting excellent, engaging content tailored specifically for your blog or website.</p>


            </div> */}
          <div class="section-title" id="about">
            <h2 className="text-center fw-bold pb-4">About</h2>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img src="/Images/about3.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Developer | UI/UX Designer</h3>
              <p class="fst-italic">
                To pursue a challenging career as Software Developer & be a part
                of a progressive organization that gives scope to enhance my
                knowledge, communication & utilizes my skills towards growth of
                organization.Self motivated and hardworking, seeking for an
                opportunity to work in a challenging environment to prove my
                skills and utilize my knowledge and Intel organization.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-rounded-right"></i>{" "}
                      <strong>Birthday:</strong> 03 November 1996
                    </li>
                    <li>
                      <i class="bi bi-rounded-right"></i>{" "}
                      <strong>Website:</strong> imarchana2015@gmail.com
                    </li>
                    <li>
                      <i class="bi bi-rounded-right"></i>{" "}
                      <strong>Phone:</strong> +91 9472308194
                    </li>
                    <li>
                      <i class="bi bi-rounded-right"></i> <strong>City:</strong>{" "}
                      Noida{" "}
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-rounded-right"></i> <strong>Age:</strong>{" "}
                      26
                    </li>
                    <li>
                      <i class="bi bi-rounded-right"></i>{" "}
                      <strong>Degree:</strong> MCA(Computer Application)
                    </li>
                    <li>
                      <i class="bi bi-rounded-right"></i>{" "}
                      <strong>Email:</strong> imarchana2015@gmail.com
                    </li>
                    <li>
                      <i class="bi bi-rounded-right"></i>{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I’m looking for a job that will allow me to develop my knowledge
                and attribute further while still doing excellent work and that
                will support my growth as a Web Development
              </p>
            </div>
          </div>

          {/* </div> */}
        </section>
        {/* <!-- End About Section --> */}
        {/* <!-- ======= Skills Section ======= --> */}
        {/* ======================================================== */}
        <section className="main-cont p-5" id="sikllss">
          <div className="container-fluid ">
            <div className="row ">
              <div class="section-title ">
                <h2 className="kk ">Skills</h2>
                <p className=" pt-4">
                  As a Web developer, I possess a diverse skill set spanning
                  front-end development, API integration, and UI/UX design. My
                  core competencies include:
                </p>
              </div>
              <div className="col-md-3">
                <span class="skill ms-5">Javascript</span>
                <div class="progress d-flex justify-content-center">
                  <span
                    class="title timer"
                    data-from="0"
                    data-to="85"
                    data-speed="1800"
                  >
                    80
                  </span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>

              <div className="col-md-3">
                <span class="skill ms-5">React J.S</span>
                <div class="progress d-flex justify-content-center">
                  <span
                    class="title timer"
                    data-from="0"
                    data-to="85"
                    data-speed="1800"
                  >
                    70
                  </span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <div className="col-md-3">
                <span class="skill ms-5">Angular</span>
                <div class="progress d-flex justify-content-center">
                  <span
                    class="title timer"
                    data-from="0"
                    data-to="85"
                    data-speed="1800"
                  >
                    70
                  </span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <div className="col-md-3">
                <span class="skill ms-5">Core Java</span>
                <div class="progress d-flex justify-content-center">
                  <span
                    class="title timer"
                    data-from="0"
                    data-to="85"
                    data-speed="1800"
                  >
                    85
                  </span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>

              {/* ====== */}

              <div className="col-md-3">
                <span class="skill ms-5">MYSQL</span>
                <div class="progress d-flex justify-content-center">
                  <span
                    class="title timer"
                    data-from="0"
                    data-to="85"
                    data-speed="1800"
                  >
                    80
                  </span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>

              <div className="col-md-3">
                <span class="skill ms-5">HTML</span>
                <div class="progress d-flex justify-content-center">
                  <span
                    class="title timer"
                    data-from="0"
                    data-to="85"
                    data-speed="1800"
                  >
                    100
                  </span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <div className="col-md-3">
                <span class="skill ms-5">CSS</span>
                <div class="progress d-flex justify-content-center">
                  <span
                    class="title timer"
                    data-from="0"
                    data-to="85"
                    data-speed="1800"
                  >
                    80
                  </span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <div className="col-md-3">
                <span class="skill ms-5">Bootstrap</span>
                <div class="progress d-flex justify-content-center">
                  <span
                    class="title timer"
                    data-from="0"
                    data-to="85"
                    data-speed="1800"
                  >
                    85
                  </span>
                  <div class="overlay"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================================================================================================================== */}
        {/* <div class="container">

                    <div class="progress d-flex justify-content-center">

                        <span class="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
                        <div class="overlay"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                    <div class="progress d-flex justify-content-center">
                        <span class="title timer" data-from="0" data-to="70" data-speed="1500">70</span>
                        <div class="overlay"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>

                    <div class="progress d-flex justify-content-center">
                        <span class="title timer" data-from="0" data-to="70" data-speed="1500">70</span>
                        <div class="overlay"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>

                    <div class="progress d-flex justify-content-center">
                        <span class="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
                        <div class="overlay"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div> */}
        {/* <!-- End Skills Section --> */}
        {/* ===========================================================Certificate========================= */}
        <section className="main-cont p-5">
          <div className="container-fluid ">
            <div className="row ">
              <div class="section-title">
                <h2 className="text-center mb-4 ">Certificates</h2>
              </div>

              <div className="col-md-12 ">
                <p className=" pt-4">
                  Certificates within my portfolio showcase my commitment to
                  continuous learning and mastery in various fields. Each
                  certificate represents dedicated effort and proficiency
                  attained in specialized areas. They serve as tangible proof of
                  my expertise, validating skills honed through rigorous
                  training and experience. These certifications not only
                  highlight my qualifications but also signify a proactive
                  approach towards personal and professional development. Each
                  certificate stands as a testament to my dedication, knowledge,
                  and ongoing pursuit of excellence.
                </p>
              </div>
              <div className="d-flex justify-content-center dflexright">
                <div className="col-md-4 mb-4 pb-4 pt-4">
                  <div class="card card-c ">
                    <img
                      class="img-fluid imag-size img-cls"
                      src="./Images/img01.jpg"
                      alt="About Images"
                    />

                    <div class="card-c__content">
                      <p class="card-c__title">Runmiles</p>
                      <p class="card-c__description text-center  card-c__title">
                        {" "}
                        Winner
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4  pb-4 pt-4">
                  <div class="card card-c ">
                    <img
                      class="img-fluid imag-size img-cls"
                      src="./Images/img1.jpg"
                      alt="About Images"
                    />

                    <div class="card-c__content">
                      <p class="card-c__title">
                        Certificate from Happiestminds
                      </p>
                      <p class="card-c__description text-center  card-c__title">
                        Frist Rank
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3  pb-4 pt-4">
                  <div class="card card-c ">
                    <img
                      class="img-fluid imag-size img-cls"
                      src="./images/img2.jpg"
                      alt="About Images"
                    />

                    <div class="card-c__content">
                      <p class="card-c__title">
                        Increase SEO Traffic With WordPress
                      </p>
                      <p class="card-c__description text-center  card-c__title">
                        Score: 85%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================Projects=================== */}
        <section>
          <div
            className=" container-fluid row p-5 text-center main-cont"
            id="projectss"
          >
            <div class="section-title">
              <h2>My Latest Project</h2>
            </div>

            <p>
              These are some of our recent design projects and we are so excited
              to show them to you.
            </p>
            <div className="col-md-4 pt-5">
              <div class="card card-pp">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <p class="card-c__title">User portfolio</p>
                  <p class="  ">React js/Angular/Firebase</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div class="card card-pp">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <p class="card-c__title">Scriza Inventory</p>
                  <p class="  ">React js</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div class="card card-pp">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <p class="card-c__title">Swatantra Mar</p>
                  <p class="  ">React js</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div class="card card-pp">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <p class="card-c__title">API Integrations</p>
                  <p class="  "></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div class="card card-pp">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <p class="card-c__title">
                    Online Movie Ticket System <br />
                    (College Project)
                  </p>
                  <p class="  ">Java/html & CSS/Boostrap</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-5">
              <div class="card card-pp">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <p class="card-c__title">Scriza Website</p>
                  <p class="  ">React Js</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div class="card card-pp">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <p class="card-c__title">Food Plaza(College Project)</p>
                  <p class="  ">Java/html & CSS/Boostrap</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div class="card card-pp">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <p class="card-c__title">Dashboard</p>
                  <p class="  ">Angular/ React js</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========================================other */}
        {/* activity===================== */}
        <div class="layout layout-2col other-activity pt-5">
          <div class="container pt-5">
            <div class="row columns">
              <div class="col  col-12 col-sm-6">
                <h2>Outside of my work life</h2>
                <div class="layout-subtitle">
                  <p>
                    because I do have a life. And I’m all about ‘work hard, play
                    hard.’
                  </p>
                </div>

                <div class="col__text">
                  <h3>I am a ski bum &amp; outdoor adventurist.</h3>
                  <p>
                    Adventure isn’t hanging on a rope off the side of a
                    mountain. Adventure is an attitude that we must apply to the
                    day to day obstacles in life.
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div class="col overflow col-12 col-sm-6">
                <img
                  src="http://stefaniegrieser.com/wp-content/uploads/2018/04/skiing-collage-768x767.png"
                  alt=""
                  class="col__image"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="layout layout-2col bigger-padding-top-140 negative-margin-top-160">
          <div class="container ">
            <div class="row columns">
              <div class="col  col-12 col-sm-6">
                <img
                  src="http://stefaniegrieser.com/wp-content/uploads/2018/04/travel-collage-768x780.png"
                  alt=""
                  class="col__image"
                />
              </div>
              <div class="col  col-12 col-sm-6 pt-5 ">
                <div class="col__text ms-5 mt-4">
                  <h3 className="ms-5">
                    I love traveling! And am fascinated by language and culture.
                  </h3>
                  <p className="ms-5">
                    In nature, nothing is perfect and everything is perfect.
                    Trees can be contorted, bent in weird ways, and they're
                    still beautiful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================================= contact me Hire me============== */}
        <section className="main-cont p-5" id="contactn">
          <div className="container-fluid ">
            <div className="row ">
              <div class="section-title">
                <h2 className="fw-bold pb-4 text-center mb-4">Contact Us.</h2>
              </div>

              <div className="col-md-6 form-p ">
                <p>
                  I am available for freelance work. Connect with me via phone:
                  9472308194or email: imarchana2015@gmail.com
                </p>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subject"
                />
                <textarea
                  type="textarea"
                  className="form-control mb-3"
                  placeholder="Your Name"
                />

                <button> SUBMIT NOW</button>
              </div>
              {/* <div className='col-md-6'>
                            <img class="w-100 imag-size" src="./images/about-6.jpg" alt="About Images" />



                        </div> */}
              <div class="col-lg-6">
                <img
                  className="contact-img"
                  src="./Images/about-6.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* ======================================preloader================ */}
        <Wrapper>
          {isVisible && (
            <div className="top-btn" onClick={goToBtn}>
              <FaArrowUp className="top-btn--icon" />
              {/* <div className="top-btn--icon">
                            <svg   xmlns="http://www.w3.org/2000/svg" height="24" width="12" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                            
                            </div> */}
            </div>
          )}
        </Wrapper>
        {/* ==============================Progressbar================ */}
        {/* ==============================footer======================== */}
        <footer>
          <div class="social">
            <p>Follow me on social media</p>
            <ul class="wrapper">
              <a
                href="https://www.linkedin.com/in/archana-dubey-bb6297189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <li class="icon linkedin">
                  <span class="tooltip">LinkedIn</span>
                  <span>
                    <i class="fab fa-linkedin"></i>
                  </span>
                </li>
              </a>
              <a href="https://github.com/archudubey1" target="_blank">
                <li class="icon github">
                  <span class="tooltip">GitHub</span>
                  <span>
                    <i class="fab fa-github"></i>
                  </span>
                </li>
              </a>
              <a href="#" target="_blank">
                <li class="icon facebook">
                  <span class="tooltip">Facebook</span>
                  <span>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </li>
              </a>
              {/* <a href="#" target="_blank">
                <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <span>
                    <i class="fab fa-instagram"></i>
                  </span>
                </li>
              </a>
              <a href="#" target="_blank">
                <li class="icon twitter">
                  <span class="tooltip">Twitter</span>
                  <span>
                    <i class="fab fa-twitter"></i>
                  </span>
                </li>
              </a> */}
            </ul>
          </div>
          <div class="final_text"></div>
          <p>
            Copyright &copy; All rights reserved
            <br />
            Designed Archana Dubey, 2023
          </p>
        </footer>
      </div>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 4rem;
    height: 4rem;
    color: #fff;
    opacity: 0.9;

    background-color: ${({ theme }) => theme.colors?.btn || "#FF0072"};

    box-shadow: ${({ theme }) => theme.colors?.shadow || "defaultShadowValue"};

    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media?.mobile || "#08a4c0"}) {
    /* Styles for mobile */

    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

export default Home;
