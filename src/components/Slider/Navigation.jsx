
import { useSwiper } from "swiper/react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const NavigationButton = () => {
    const swiper = useSwiper()
    return ( 
        <div className="swiper-nav-btn">
                <button onClick={()=>swiper.slidePrev()}><ArrowBackIcon/></button>
                <button onClick={()=>swiper.slideNext() }><ArrowForwardIcon/></button>
        </div>
     );
}
 
export default NavigationButton;