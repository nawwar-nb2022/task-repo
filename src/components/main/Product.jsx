import "./Main.scss";
const Product = ({data}) => {
    return ( 
        <>
            {
                data.map((d , rowId)=>{
                    return (
                        <div key={rowId} className="mainContainer">
                            <div className="icon">
                                <img src={d.image} alt="test" />
                            </div>
                            <p className="header">
                                {d.title}
                            </p>
                            <div className="body">
                                {d.body}
                            </div>
                        </div>
                    )
                })
            }
        </>
     );
}
 
export default Product;