import React from 'react'

const Carousel = () => (
  <div className='carousel' style={{scrollSnapType: 'x mandatory', overflowX: 'scroll', display: 'flex'}}>
    <picture>
      <source srcset='https://placehold.it/1170x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} media="(min-width: 992px)" />
      <source srcset='https://placehold.it/962x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} media="(min-width: 768px)" />
      <img src='https://placehold.it/737x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} />
    </picture>
    <picture>
      <source srcset='https://placehold.it/1170x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} media="(min-width: 992px)" />
      <source srcset='https://placehold.it/962x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} media="(min-width: 768px)" />
      <img src='https://placehold.it/737x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} />
    </picture>
    <picture>
      <source srcset='https://placehold.it/1170x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} media="(min-width: 992px)" />
      <source srcset='https://placehold.it/962x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} media="(min-width: 768px)" />
      <img src='https://placehold.it/737x500' loading='lazy' alt='' style={{scrollSnapAlign: 'center', width: '100vw', height: '100%'}} />    
    </picture>
  </div>
)

export default Carousel
