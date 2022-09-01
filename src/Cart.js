import React from 'react'
import { Link } from 'react-router-dom';
import StripeButton from './Payment';

export default function Cart(props) {
    const { cartProducts } = props; 
    // In the above we are assigning props parameter.(name could be anything in place of props)

    var data = cartProducts.map((item) => (
        <div key={item.id} className="row" style={{ textAlign: 'center' }} className="container">
            <div><strong>{item.name} <span>-</span> {item.price}</strong></div>
            <div><strong></strong></div>
            
        </div>
    ))
    return (
        <div>
            {data}
            <div style={{textAlign: 'center'}}>
                <StripeButton/>
                
            </div>
        </div>

    )
}