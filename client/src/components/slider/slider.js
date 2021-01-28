import React, { useState } from "react";
import FontAwesome from "react-fontawesome";

const Slider = ({ data }) => {
  const [current, setcurrent] = useState(0);
  const length = data.length;

  const nextslide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevslide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };
  setTimeout(() => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  }, 20000);
  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FontAwesome
        className="arrowLeft"
        name="arrow-left"
        style={{
          color: "black",
          paddingLeft: "1rem",
          cursor: "pointer",
          width: "5rem",
          height: "5rem",
        }}
        onClick={prevslide}
      />

      <FontAwesome
        name="arrow-right"
        className="arrowRight"
        onClick={nextslide}
      />
      {data.map((slide, i) => {
        return (
          <div className={i === current ? "slide active" : "slide"} key={i}>
            {i === current && (
              <span>
                <img src={slide.image} alt="one" className="image" />
                <h3 className="imageText">{slide.text}</h3>
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
