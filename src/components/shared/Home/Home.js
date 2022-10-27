import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div>
      <Carousel className='container w-100'>
      
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.d42e062a51e37a8f464a4ccd591015cd?rik=0yeVvOCjowOv7w&pid=ImgRaw&r=0"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.8163d703d34458f4b875188f42fdf33e?rik=%2feX1uTfj1qH6DA&pid=ImgRaw&r=0"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.8124fddde642c9934487294be2e7ce38?rik=W5V3s13ztUHspQ&pid=ImgRaw&r=0"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home