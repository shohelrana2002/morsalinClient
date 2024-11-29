import React from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              WelCome <br />
              <span className="text-black">
                <Typewriter
                  words={["The Foundation of Dreams"]}
                  loop={40}
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={90}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <div
              data-aos-delay="80"
              data-aos-duration="1000"
              data-aos="flip-left"
              className="text-3xl font-semibold text-primary"
            >
              On the way to the future with time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
