import React from 'react'
import './Feature.css'
import feature from '../../../assets/images/feature.png'
import texture from '../../../assets/images/texture.png'

const Feature = () => {
  return (
    <div>
      <div className='feature-image-container'>
        <div className='feature-decorator-left'></div>
        <div className="feature-decorator-right"></div>
        <img src={feature} alt='feature' />
      </div>
      <div className='feature-bottom'>
        <img src={texture} alt='texture' />
      </div>
    </div>
  )
}

export default Feature