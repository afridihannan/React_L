import React from 'react';
import './Home.css';
import Iphone1 from '../../Assest/phone1.png';
import Add from '../../Assest/Add.png'

export default function Home(props) {
    console.log("Props-Home",props.cardData.cardItems)
    return (
        <div>
            <div className="cart-wrapper">
                <div className="img-wrapeer item">
                    <img src={Iphone1} alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>I phone</span>
                    <span>price:$1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button className="btn btn-primary" onClick={
                        ()=>props.addtoCartHandler({price:1000,name:"I phone 11"})
                    }>Add to Cart</button>
                     <button className="btn btn-primary" onClick={
                        ()=>props.removefromcartHandler({price:1000,name:"I phone 11"})
                    }>Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}
