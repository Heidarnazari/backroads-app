import img from "../images/hero.jpg";

function About() {
  return (
    <div id="about">
      <h1 className="about-title">
        about <span>us</span>
      </h1>
      <div className="about-center">
        <div className="img-container">
          <img src={img} alt="about-img" />
        </div>
        <div className="text">
          <h3 className="text-title">explore the differences</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            veritatis explicabo consequatur quibusdam voluptate possimus!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            veritatis explicabo consequatur quibusdam voluptate possimus!
          </p>
          <a href="#services">read more</a>
        </div>
      </div>
    </div>
  );
}

export default About;
