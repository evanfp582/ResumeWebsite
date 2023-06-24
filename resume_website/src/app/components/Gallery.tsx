import React, { useEffect, useState } from "react"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import boardGame from '../images/boardGames.jpg'
import hike from '../images/Sunrise_Hike.jpg'
import strava from '../images/strava.jpg'
import rit from '../images/RITLogo.jpg'
import './Carousel.css'


const Gallery = () => {
  return (
    <div>
      <Carousel showStatus={false} showThumbs={false} autoPlay interval={3000} transitionTime={500} infiniteLoop>
        <div className="homeImage">
          <Image src={hike} alt="" />
          <p className="photoCaption">My Photo 1</p>
        </div>
        <div className="homeImage">
          <Image src={strava} alt="" />
          <p className="photoCaption">My Photo 2</p>
        </div>
        <div className="homeImage">
         <Image src={rit} alt="" />
          <p className="photoCaption">My Photo 3</p>
        </div>
        <div className="homeImage">
          <Image src={boardGame} alt="" />
          <p className="photoCaption">My Photo 4</p>
        </div>
      </Carousel>
      </div>
  )
};

export default Gallery