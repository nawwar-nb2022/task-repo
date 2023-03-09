import "./Intro.scss"
const Intro = () => {
    return ( 
        <div className="Intro">

        <div className="top">
            <div className="left">
                <p>
                Get the best deals and 
                offers in your favorite 
                <span className="liner" > premium store </span>
                </p>
            </div>
            <div className="right">
                <img src="../../Assets/banner-LP.png" alt=""/>
            </div>
        </div>

        <div className="bottom">
            <p className="text">
                premtitto is your best shopping ally, enjoy a whole year of discount 
                new offers , and exclusive access to online promo code for the top test 
                product and service, your option are endless
            </p>
            <div className="button">
                <img src="../../Assets/p1.png" alt=""/>
                <img src="../../Assets/p2.png" alt=""/>
            </div>
        </div>
        </div>
     );
}
 
export default Intro;