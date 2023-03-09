import TaskAltIcon from '@mui/icons-material/TaskAlt';
import "./Buy.scss"
const Buy = () => {
    return ( 
        <div className="Buy">
            <div className="container">
                <div className="top">
                    <div className="button">
                        <button>Do more and spend less</button>
                    </div>
                    <h2>
                        You'll wonder how you ever <span className="liner">lived without it</span>
                    </h2>
                </div>
                <div className="body">
                    <div className="header">
                        <h1>79 SAR
                        <span>/month</span>
                        </h1>
                        <p>1 year premium membership</p>
                    </div>
                    <div className="main">
                        <ul>
                            <li className="item">
                                <span>
                                    <TaskAltIcon/>
                                </span>
                                Include hundreds of offers across six categories  
                            </li>
                            <li className="item">
                                <span>
                                    <TaskAltIcon/>
                                </span>
                                Unlimited offer usage for the full subscription period
                            </li>
                            <li className="item">
                                <span>
                                    <TaskAltIcon/>
                                </span>
                                valid for 365 days from the date of purchase 
                            </li>
                            <li className="item">
                                <span>
                                    <TaskAltIcon/>
                                </span>
                                Include offers in all the cities in saudi Arabia 
                            </li>
                        </ul>

                        <div className="submit">
                            Get started 
                        </div>
                    </div>
                </div>

                
</div>
        </div>
     );
}
 
export default Buy;