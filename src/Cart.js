import react from "react";
import CartItem from "./CartItem";

class Cart extends react.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'iphone',
                    qty: 2,
                    img: '',
                    id: 1
                },
                {
                    price: 9,
                    title: 'watch',
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price: 909,
                    title: 'Ipad',
                    qty: 3,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        
        this.setState({
            products: products
        })
    }

    render (){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;