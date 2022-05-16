import React from "react";
import '../App.css'

export default function Menu(props) {
    let total =0;
    const cart =props.cart;
    if(cart!==undefined){
        total = cart.reduce((total, item) => {
            return total + (Number(item.price)* Number(item.quantity));
        }, 0);
    }

    return (
        <div className="col-10 offset-1" data-testid="menu">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="/">Shop</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about" data-testid="aboutBtn">About Us</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Checkout</a>
                    <div className="dropdown-menu checkout">
                        {cart.map(item => {
                            return <div className="row checkout-item">
                                <div className="col-6">
                                    <img src={item.image} width="100%" />
                                </div>
                                <div className="col-6">
                                    <strong><small>{item.name}</small></strong><br />
                                    <strong>&euro;{item.price}</strong>
                                    <br />
                                    <small>Quantity:{item.quantity}</small>
                                </div>
                            </div>
                        })}
                        {cart.length > 0 ? <a className="dropdown-item checkout-btn" href="#">Proceed</a> :
                            <small>No items in your cart</small>}
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link cart" href="#">
                        <img src="cart.png" width="24" />
                        <span>{cart.length}</span>
                        <strong>&euro;{total}</strong>
                    </a>
                </li>
            </ul>
        </div>
    );
}