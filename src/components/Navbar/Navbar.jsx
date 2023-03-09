import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.scss"
import { Link } from "react-router-dom";
const Navbar = () => {
    const [active , setActive] = useState()
    const  activeFunc = (e)=>{
        setActive(e.target.id)
      }
    const [toggle , setToggle] = useState("hide")
    const toggleFun =()=>{
        toggle=="hide"?setToggle("show"):setToggle("hide")
    }
   useEffect(()=>{
       console.log(active);
   },[active])
    return ( 
        <div className="Navbar">
            <div className="items">
            <div className="logo">
                <img src="./Assets/1.png" alt=""/>
            </div>
            
            <div className="responsive-button" 
                onClick={toggleFun}
            >
                <MenuIcon/>
            </div>
            <div className={`tabs ${toggle}`} >
                <div className="navs">
                <div className={active == "1"? "tab inTab" : "tab" } 
                onClick={(e)=>{
                    toggleFun()
                    activeFunc(e)
                    }}>
                        <Link to="/Buy" id="1">
                          Buy
                        </Link>
                        </div>
                <div className={active == "2"? "tab inTab" : "tab" } 
                onClick={(e)=>{
                    toggleFun()
                    activeFunc(e)
                    }}>
                        <Link to="/" id="2" >
                            Discover Deals
                        </Link>

                        </div>
                <div className={active == "3"? "tab inTab" : "tab" } 
                onClick={(e)=>{
                    toggleFun()
                    activeFunc(e)
                    }}>
                        <Link to="/" id="3" >
                            How it works
                        </Link> 
                    </div>
                <div className={active == "4"? "tab inTab" : "tab" } 
                onClick={(e)=>{
                    toggleFun()
                    activeFunc(e)
                    }}>
                        <Link to="/" id="4" >
                            For partner
                        </Link>                         
                        </div>
                <div className={active == "5"? "tab inTab" : "tab" } 
                onClick={(e)=>{
                    toggleFun()
                    activeFunc(e)
                    }}>
                        <Link to="/" id="5" >
                        Blog
                        </Link>                         
                        
                        </div>
                </div>
            
            <div className="login">
                <button >
                    Become a partner
                </button>
            </div>
            
            </div>

            </div>
        </div>
     );
}
 
export default Navbar;