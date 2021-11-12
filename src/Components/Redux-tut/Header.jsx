import React from 'react'
import Add from '../../Assest/Add.png'
import './Home.css'

function Header(props) {
    console.log(props.cardData.cardItems)
    return (
        <>
             <h1>Home, Sweet Home ...Lets learn Redux</h1>
             <span className="itemno">{props.cardData.cardItems.length}</span> 
            <div className="add-to-cart">
                <img src={Add} height="100px" width="100px" alt="" />
            </div>
        </>
    )
}

export default Header
