import React from 'react';

function Arrows({ prevSlidep1, nextSlidep1 }) {

  return (
    <div className="p1-arrows">
      <span className="p1-prev" onClick={prevSlidep1}>
        &#10094;
      </span>
      <span className="p1-next" onClick={nextSlidep1}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;