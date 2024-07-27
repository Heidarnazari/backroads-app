import { featuredTours } from "../data";

function Tours() {
  const tours = featuredTours.map((tour) => {
    return (
      <div className="tour-item" key={tour.id}>
        <div className="tour-img-container">
          <img src={tour.img} alt="tour.title" />
          <p className="date">{tour.date}</p>
        </div>
        <div className="tour-details">
          <h3 className="tour-title">{tour.title}</h3>
          <p className="tour-text">{tour.text}</p>
          <div className="tour-resolution">
            <p className="dest res">
              <i className="fa-solid fa-flag"></i>
              {tour.destination}
            </p>
            <p className="price res">
              from: {tour.leastPrice}
              <span>$</span>
            </p>
            <p className="days res">
              {tour.days}
              <span> Days</span>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="tours">
      <h1 className="tours-title">
        featured <span>tours</span>
      </h1>
      <div className="tours-center">{tours}</div>
    </div>
  );
}

export default Tours;
