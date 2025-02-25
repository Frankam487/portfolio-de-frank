import "./about.css";
import Info from "./Info";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">A Propos de moi</h2>
      <span className="section__subtitle">Mon intro</span>
      <div className="about__container container grid">
        <img src="/frank.jpg" alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Je suis un développeur web junior, passionné par la programmation et
            les nouvelles technologies. J'ai commencé à coder il y a 2 ans et
            j'ai
          </p>
          <a href="./cv.pdf" download="" className="button button--flex">
            Telecharger CV
          <img src="./files.svg" alt="" />
          </a>
       
        </div>
      </div>
    </section>
  );
};

export default About;