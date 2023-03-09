import "./Work.scss"
const Work = () => {
    const data = [
        {
            title : "Log in",
            body : "Download the mobile app from Apple store, please enter your details, tap register, and get our exclusive one-year special discount membership"
        },
        {
            title : "Search for deals",
            body : "search for deals, Use Our deals and offers browser and filter according to your location, category, and preference A list of online offers will appear in a few seconds"
        },
        {
            title : "Save more ",
            body : "Save more! Select the deal you need enter the amount to pay and get a unique discount voucher. Enjoy a full year of discount and offers"
        },
    ]
    return ( 
        <div className="Work" id="Work">
            <div className="main">
                <button>
                    How it work 
                </button>
                <h2>
                    Amazing online offers are waiting for you!
                </h2>
                <h4>
                    In 3 simple steps, you can start saving! 
                </h4>
                <h5>
                    log in to Premitto today and discover a unique way to save, with hundreds of
                     in-store deals and offers and online promo codes to enjoy the pleasure of shopping 
                </h5>
                <img src="../../Assets/content.png" alt=""/>
            </div>
            <div className="footer">
                {
                    data.map((d,rowId)=>{
                        return(
                            <div className={rowId=="2"?"color container" : "container"} key={rowId}>
                                <div className="title">
                                    {d.title}
                                </div>
                                <div className="body">
                                    {d.body}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     ); 
}
 
export default Work;