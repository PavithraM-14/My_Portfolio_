import "../styles/Hero.css";
import profile from "../assets/PIC.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-text">
          <p className="hello">Hello.</p>
          <h1>
            I’m <span className="highlight">Pavithra</span><br />
            <span className="role">FullStack Developer</span>
          </h1>
          <p className="subtitle">
            A passionate learner who enjoys exploring emerging technologies and turning real-world problems into effective, scalable solutions.
          </p>

          <div className="hero-buttons">
            <button className="btn outline">My Resume</button>
          </div>
        </div>

        {/* Hero Image */}
<div className="hero-image">
  <div className="glow"></div>
  <img
    src={PIC}
    alt="Pavithra"
    className="hero-main-image"
  />
</div>

      </div>
    </section>
  );
};

export default Hero;
