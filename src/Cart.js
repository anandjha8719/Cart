import react from "react";
import CartItem from "./CartItem";

class Cart extends react.Component {
    render (){
        return (
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;