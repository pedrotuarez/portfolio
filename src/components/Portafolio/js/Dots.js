import React from 'react';

function Dots({activeIndex, onclick, imageSliderp1}) {
  return (
    <div className="p1-all-dots">
      {imageSliderp1.map((slide, index) => (
       <span key={index} 
        className={`${activeIndex === index ? "p1-dot p1-active-dot" : "p1-dot"}`}
        onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;