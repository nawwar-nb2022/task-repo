import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.scss"
import { Link } from "react-router-dom";
const Navbar = () => {
    const [active , setActive] = useState()
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
                id="1" 
                onClick={(e)=>{
                    toggleFun()
                    setActive(e.target.id)
                    }}>
                        <Link to="/Buy">
                          Buy
                        </Link>
                        </div>
                <div className={active == "2"? "tab inTab" : "tab" } 
                id="2" 
                onClick={(e)=>{
                    toggleFun()
                    setActive(e.target.id)
                    }}>
                        <Link to="/">
                            Discover Deals
                        </Link>

                        </div>
                <div className={active == "3"? "tab inTab" : "tab" } 
                id="3" 
                onClick={(e)=>{
                    toggleFun()
                    setActive(e.target.id)
                    }}>
                        <Link to="/">
                            How it works
                        </Link> 
                    </div>
                <div className={active == "4"? "tab inTab" : "tab" } 
                id="4" 
                onClick={(e)=>{
                    toggleFun()
                    setActive(e.target.id)
                    }}>
                        <Link to="/">
                            For partner
                        </Link>                         
                        </div>
                <div className={active == "5"? "tab inTab" : "tab" } 
                id="5" 
                onClick={(e)=>{
                    toggleFun()
                    setActive(e.target.id)
                    }}>
                        <Link to="/">
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