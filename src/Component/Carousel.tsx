import * as React from "react"
import { useState, useEffect } from 'react' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";


import "../Images/1.jpeg"
import "../Images/2.jpg"
import "../Images/3.jpg"
import "../Images/4.png"


const imageList =[
    {
        id: 1,
        src: require("../Images/1.jpeg"),
        alt: "Image 1",
    },
    {
        id: 2,
        src: require("../Images/2.jpg"),
        alt: 'Image 2',
    },
    {
        id: 3,
        src: require("../Images/3.jpg"),
        alt: 'Image 3',
    },
    {
        id: 4,
        src: require("../Images/4.png"),
        alt: 'Image 4',
    }
]

const Container = styled.div` 
  width: 70%;
  margin: 10rem auto;
  .slick-prev::before,
  .slick-next::before {
    color: rgb(182, 22, 39) !important;
    display: none;
  }

.slick-prev:before,
  .slick-next:before {
    color: rgb(182, 22, 39) !important;
    display: flex;
    font-size: 25px;
  }

  .slick-dots li button:before {
    font-size: 12px !important;
    color: rgb(182, 22, 39) !important;
  }

  .slick-dots {
    width: 100%;
    display: flex !important;
    justify-content: center;
  }
 & .slick-list { margin: 0 -10px;
     & .slick-slide > div { margin: 0 10px; } }
`;
const Image = styled.img`
    width: 20rem;
    height: 20rem;
`
const Carousel = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handelWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handelWidth);
    return () => {
      window.removeEventListener("resize", handelWidth);
    };
  }, []);

  const numShow:number = width > 1200 ? 4 :  width >= 992 ? 3 : width >= 768 ? 2 : 1 ;
  const numScroll:number = width > 1200 ? 4 :  width >= 992 ? 3 : width >= 768 ? 2 : 1 ;

  const Setting = {
    dots: true,
    speed: 1000,
    slidesToShow: numShow  ,
    slidesToScroll: numScroll,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 0 ,
    arrows: true,
    width : true,
  };
  

  const settings = Setting;
    
  return (
    <Container>
      <Slider {...settings}>
        {imageList.map((image) => (
          <Image src={image.src} alt={image.alt} key={image.id} />
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
