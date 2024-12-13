import React from 'react';
import './Slider.css';
import slider1 from '../../../assets/images/slider-1.png';
import slider2 from '../../../assets/images/slider-2.png';
import slider3 from '../../../assets/images/slider-3.png';
import slider4 from '../../../assets/images/slider-4.png';
import slider5 from '../../../assets/images/slider-5.png';
import leftArrow from '../../../assets/images/left-arrow-button.png';
import rightArrow from '../../../assets/images/right-arrow-button.png';

const Slider = () => {
  const sliders = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5
  ];

  return (
    <div>
      <div className='slider-container'>

        <button className="slider-btn-prev" style={{ backgroundImage: `url(${leftArrow})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></button>
        <button className="slider-btn-next" style={{ backgroundImage: `url(${rightArrow})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></button>

        <div className="slider-list">
          {sliders.map((slider, index) => (
            <img className='slider-item' key={index} src={slider} alt={`Slider ${index + 1}`} />
          ))}
        </div>
        <div className="slider-dots-container">
          <button className="slider-btn-dot"></button>
          <button className="slider-btn-dot"></button>
          <button className="slider-btn-dot"></button>
          <button className="slider-btn-dot"></button>
          <button className="slider-btn-dot"></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
