import React from 'react';

function SliderContent({activeIndex, imageSliderp1}){

  return (
    <section>
      {imageSliderp1.map((slide, index) => (
        <div key={index} 
         className={index === activeIndex ? "p1-slider p1-active" : "p1-inactive"}
        >
          <img className="p1-avatar" src={slide.urls} alt=""/>
          <blockquote className="p1-slide-title">{slide.description}</blockquote> 
          <h3 className="p1-text-first-color">{slide.name}</h3> 
          <h6 className="p1-slide-text">{slide.position}</h6> 
        </div>
      ))}
    </section>
  );
}

export default SliderContent;