import { useEffect, useState } from "react";
import "./Footer.scss";


import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const [active , setActive] = useState()
    const  activeFunc = (e)=>{
      setActive(e.target.id)
      }
    useEffect(()=>{
    console.log(active);
    },[active])
    return ( 
        <div className="footer">
<div className="top-main">

        <div className="top-footer">
            <div className="left">
                <img src="../../Assets/1.png" alt=""/>
                <p>
                    premitto is an exclusive subscription based service that offers a
                    variety of deals and discount on premium experience across six
                    categories including food and beverages, beauty abd wellness,
                    entertainment, retail and service, travel and hotel, and online deals  
                </p>
            </div>
            <div className="right">
                <div className="button">
                <img src="../../Assets/Mobile app store badge.png" alt=""/>
                </div>
                <div className="button">
                    <img src="../../Assets/Mobile app store badge (2).png" alt=""/>
                </div>
            </div>
            
        </div>

        <div className="bottom-footer">
        <ul>
            <li 
            className={active === "1"?"tap active":"tap"} 
            id="1" 
            onClick={(e)=>activeFunc(e)}
            >Home</li>
            <li 
            className={active === "2"?"tap active":"tap"} 
            id="2" 
            onClick={(e)=>activeFunc(e)}
            >About us</li>
            <li 
            className={active === "3"?"tap active":"tap"} 
            id="3" 
            onClick={(e)=>activeFunc(e)}
            >how it works</li>
            <li 
            className={active === "4"?"tap active":"tap"} 
            id="4" 
            onClick={(e)=>activeFunc(e)}
            >Faq</li>
            <li 
            className={active === "5"?"tap active":"tap"} 
            id="5" 
            onClick={(e)=>activeFunc(e)}
            >Contact us</li>
            <li 
            className={active === "6"?"tap active":"tap"} 
            id="6" 
            onClick={(e)=>activeFunc(e)}
            >Private policy</li>
            <li 
            className={active === "7"?"tap active":"tap"} 
            id="7" 
            onClick={(e)=>activeFunc(e)}
            >Terms & conditions</li>
        </ul>
        </div>
        
</div>
{/* ------- */}
<div className="bottom-main">

        <hr/>
        
        <div className="bottom">
            <div className="left">
                @2022 premitto LLC. All rights reserved
            </div>
            <div className="right">
                <span className="icon">
                    <InstagramIcon/>
                </span>
                <span className="icon">
                    <TwitterIcon/>
                </span>
                <span className="icon">
                    <LinkedInIcon/>
                </span>
                <span className="icon">
                    <img src="../../Assets/tik-tok (1).png" alt=""/>
                </span>
                <span className="icon">
                    <FacebookRoundedIcon/>
                </span>
            </div>
        </div>
</div>
    </div>
     );
}
 
export default Footer;