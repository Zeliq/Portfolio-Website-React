import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Zeliq Zayyan</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        {/* <video
          src="https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4"
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video> */}
        <img src="/hero-bg.png" className='home-video'/>
        <header data-thq="thq-navbar" className="home-navbar">
          <img alt="image" src="/logo-200h.png" className="home-branding" />
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div className="home-container1"></div>
          <div className="home-hamburger"></div>
          <img alt="image" src="/hamburger.svg" className="home-icon" />
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container2">
                <img alt="image" src="/logo.svg" className="home-image" />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container3">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon3">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon5">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon7">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header"></div>
          </div>
          <h1 className="home-heading">
            <span className="home-text05">Hey</span>
            <br className="home-text06"></br>
            <span className="home-text07">
              This is
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text08">zeliq.</span>
            <br></br>
          </h1>
          <p className="home-caption">Innovating for tomorrow.</p>
          <button
  type="button"
  className="home-button button"
  onClick={() => {
    window.location.href =
      'https://drive.google.com/file/d/1YEU0IZ2ln9e-Z3fmXdVWax3VirTzEaj2/view?usp=sharing';
  }}
>
  <span>
    <span>Get Resume</span>
    <br />
  </span>
</button>

        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption1">
          <span className="home-text13">
            Let the experience
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text14"></br>
          <span className="home-text15">speak</span>
          <span className="home-text16">.</span>
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content">
          <div className="home-stat">
            <h3 className="home-header1">6+</h3>
            <span className="home-caption2">Projects</span>
          </div>
          <div className="home-stat1">
            <h3 className="home-header2">Industry Experience</h3>
            <span className="home-caption3">
              Mainly in startup environments
            </span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header3">9+</h3>
            <span className="home-caption4">Additional Certifications</span>
          </div>
        </div>
      </section>
      <section className="home-objectives">
        <div className="home-content1">
          <span className="home-text17">Objectives</span>
          <div className="home-objectives-list">
            <div className="objective">
              <h3 className="home-text18">Learn</h3>
              <p className="home-text19">
                Eager to embark on a career journey driven by a relentless
                pursuit of knowledge and skills, where I can engage with
                challenges that foster continuous learning, enabling me to stay
                at the forefront of industry trends and best practices.
              </p>
            </div>
            <div className="objective home-objective1">
              <h3 className="home-text20">Grow</h3>
              <p className="home-text21">
                Committed to a career path that not only offers personal growth
                but also empowers me to contribute significantly to the growth
                of the organization. I am determined to seek out roles and
                responsibilities that encourage me to stretch beyond my comfort
                zone, fostering both individual and collective success
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective2">
              <h3 className="home-text22">Experiment</h3>
              <p className="home-text23">
                Enthusiastic about embracing a career marked by a spirit of
                innovation and experimentation, I aspire to join an environment
                that values calculated risks and creative thinking. By
                fearlessly stepping into uncharted territory, I aim to discover
                fresh perspectives and unconventional solutions that drive
                progress and redefine possibilities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content2">
          <div className="home-header4"></div>
          <div className="home-testimonial">
            <div className="home-content3">
              <span className="home-text24">Testimonial</span>
              <p className="home-text25">
                “One thing that stood out to me with zeliq was his commitment
                towards learning continuosly and refining his skills to grow
                exponentially.”
              </p>
            </div>
            <div className="home-information">
              <div className="home-author">
                <span className="home-name">Ashmitha Ramya</span>
              </div>
              <img
                alt="image"
                src="/28-284246_linkedin-01-icon-linkedin-white-color-200h.png"
                className="home-from"
              />
            </div>
          </div>
        </div>
        <div className="home-images"></div>
      </section>
      <div className="home-footer">
        <div className="home-content4">
          <div className="home-main">
            <div className="home-branding1">
              <img alt="image" src="/logo-200h.png" className="home-image1" />
              <span className="home-text26">Zeliq Zayyan</span>
            </div>
            <div className="home-links">
              <div className="home-column">
                <div className="home-list">
                  <Link to="/" className="home-navlink">
                    About
                  </Link>
                  <Link to="/" className="home-navlink1">
                    <span className="home-text27">Resume</span>
                    <br></br>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text29">
              © 2022 zeliq zayyan - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button1 button">
              <img alt="image" src="/arrow.svg" className="home-image2" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Script
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
