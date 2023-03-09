import "./Slider.scss"
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavigationButton from "./Navigation";

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const data = [{
        img:"../../Assets/logo-image.png",
        title : "Olivia Rhye . 20 jan 2022",
        header:"Blog title goes here",
        body:"Like to know the secret of transforming a 2-14 team into a 3x super Bowl wining Dynasty"
    },
    {
        img:"../../Assets/logo-image-2.png",
        title : "Phoenix Baker .19 jan 2022",
        header:"Blog title goes here",
        body:"Liner helps streamline software projects, sprints, tasks"
    },
    {
        img:"../../Assets/logo-image-3.png",
        title : "Alec whitten .17 jan 2022",
        header:"Blog title goes here",
        body:"the rise of RESTful APIs has been met by rise in tools for creating, testing and managing them"
    },
    {
        img:"../../Assets/logo-image-4.png",
        title : "Olivia Rhye . 20 jan 2022",
        header:"Blog title goes here",
        body:"Like to know the secret of transforming a 2-14 team into a 3x super Bowl wining Dynasty"
    },
]

const Slider = () => {
    register()
    return ( 
        <div className="Slider">
            <div className="top">
                <div className="left">
                    <button>Our Blog</button>
                    <h1>
                        A 360 tour with the best places you!
                    </h1>
                </div>
                <div className="right">
                    <div>
                    Discover trends and news about the best restaurants, hotels, and shopping place
                    </div>
                </div>
            </div>
   
            <div className="slider-body">
                
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
          {data.map((d,rowId)=>{
              return(
                    <SwiperSlide key={rowId} className="main-swiper">
                        <div className="top">
                            <img src={d.img} alt="" style={{width :"100%"}}/>
                        </div>
                        <div className="main-swiper-body">
                            <div className="title">
                                {d.title}
                            </div>
                            <div className="header">
                                <p>{d.header}</p> <p className="icon"><ArrowOutwardIcon/></p>
                            </div> 
                            <div className="body">
                                {d.body}
                            </div>
                        </div>
                    </SwiperSlide>
              )
          })}

       <NavigationButton/>
      </Swiper>

            </div>

            <div className="footer-slider">
                <div className="left">
                    <div className="top">
                        <p>
                        Enjoy the experience of shopping more and <span> paying less!</span>
                        </p>
                    </div>
                    <div className="bottom">
                        <img src="../../Assets/Mobile app store badge.png" alt=""/>
                        <img src="../../Assets/Mobile app store badge (2).png" alt=""/>
                    </div>
                </div>
                <div className="right">
                    <img src="../../Assets/banner-LP.png" alt=""/>
                </div>
            </div>
   
        </div>
     );
}
 
export default Slider;