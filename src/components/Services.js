import { services } from "../data";

function Services() {
  const serviceItems = services.map((service) => {
    return (
      <div className="service-item" key={service.id}>
        <div className="icon-container">
          <i className={service.icon}></i>
        </div>
        <div className="service-details">
          <h4 className="service-title">{service.title}</h4>
          <p className="service-text">{service.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div id="services">
      <h1 className="services-title">
        our <span>services</span>
      </h1>
      <div className="services-center">{serviceItems}</div>
    </div>
  );
}

export default Services;
