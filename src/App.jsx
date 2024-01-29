import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Project from "./components/Project";
import ImageFiller from "react-image-filler";
import "./App.css";

function App() {
  return (
    <div className="root">
      <div className="navbar">
        <div className="logo">Hanz Po</div>
        <div className="shortcuts">
          <a href="#top">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="content">
        <div id="about" className="intro">
          <ImageFiller width={300} height={400} />
          <div className="intro-text">
            <p className="hi">Hey, my name is</p>
            <h1 className="big-name">Hanz Po</h1>
            <div className="typewriter">
              I'm a
              <Typewriter
                words={[
                  " developer.",
                  " problem solver.",
                  " lifelong learner.",
                  " space enthusiast.",
                  " cheese enjoyer.",
                ]}
                cursor
                loop={false}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
          </div>
        </div>
        <div id="projects" className="projects">
          <h1>Projects</h1>
          <div className="gallery">
            <Project projectName="Intellimailr" />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
        <div id="experience" className="experience">
          <h1>Experience</h1>
          <div className="tech-stacks"></div>
          <div className="roles"></div>
        </div>
        <div id="contact" className="contact">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
