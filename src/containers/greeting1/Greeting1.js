import React, {useContext} from "react";
import {Fade, Slide} from "react-reveal";
// import emoji from "react-easy-emoji";
import "./Greeting1.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting1} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting1() {
  const {isDark} = useContext(StyleContext);
  if (!greeting1.displayGreeting1) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting1">
        <div className="greeting1-main">
          <div className="greeting1-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting1-text" : "greeting1-text"}
              >
                {" "}
                {greeting1.title}{" "}
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting1-text-p"
                    : "greeting1-text-p subTitle"
                }
              >
                {/* {greeting1.subTitle} */}
                {greeting1.subTitle.split("\n").map((line, i) => (
                  <Slide bottom duration={800} delay={i * 150} key={i}>
                    <span>
                      {line.trim()}
                      <br />
                      <br />
                    </span>
                  </Slide>
                ))}
              </p>
              <div id="resume" className="empty-div"></div>
              {/* <SocialMedia /> */}
              {/* <div className="button-greeting1-div">
                <Button text="Contact me" href="#contact" />
                {greeting1.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div> */}
            </div>
          </div>
          {/* <div className="greeting1-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
        </div>
      </div>
    </Fade>
  );
}
