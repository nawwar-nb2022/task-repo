import "./Main.scss"
import Product from "./Product"
const Main = () => {
  const   data=[
        {
            image : "../../Assets/Featured-icon-1.png",
            title: 'Restaurants & cafes',
            body : "Get discounts and offers from your favorite restaurant & cafes! Let's enjoy the best experiences for your palate "
        },
        {
            image : "../../Assets/Featured-icon-2.png",
            title: 'Retail & service',
            body : "Be the first to discover and receive new offers on your favorite brands Get the most out of your shopping"
        },
        {
            image : "../../Assets/Featured-icon-3.png",
            title: 'Beauty & Wellness ',
            body : "Pamper and take care of yourself with special deals for spas, beauty salons, health, fitness , and more "
        },
        {
            image : "../../Assets/Featured-icon-4.png",
            title: 'Travel & Hotels',
            body : "the world is yours! Access deals and offers and get the best hotels and travel package"
        },
        {
            image : "../../Assets/Featured-icon-5.png",
            title: 'Entertainment',
            body : "Get discounts and offers from your favorite restaurant & cafes! Let's enjoy the best experiences for your palate "
        },
        {
            image : "../../Assets/Featured-icon-6.png",
            title: 'online shopping',
            body : "Optimize the way you recover , train, and sleep with daily reporting on mobile and desktop apps. start training smarter, not harder"
        },
    ]
    return ( 
    <div className="main">
        <div className="top">
            <div className="header-button">
                <button>Discover the beast discounts and offers nears you</button>
            </div>
            <div className="Title">
                Enjoy the art of purchasing 
                and saving!
            </div>
            <div className="body">
                Our user-friendly mobile app you find deals and offers in-store and 
                promo codes to shop online with a sophisticated geo-location system 
            </div>
        </div>
        <div className="container">
            <div className="left">
                <Product data={data}/>
            </div>
            <div className="right">
              <img src="../../Assets/mockup-1.jpeg" alt=""/>
            </div>
        </div>
    </div>
     );
}
 
export default Main;