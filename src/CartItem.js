import react from 'react';
import React from 'react';

class CartItem extends react.Component {

    render() {
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs. {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img style={styles.button} alt="increase" className="action-actions" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img style={styles.button} alt="decrease" className="action-actions" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img style={styles.button} alt="delete" className="action-actions" src="https://cdn-icons-png.flaticon.com/512/535/535246.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    },
    button: {
        width: 24,
        height: 24,
        margin: 4,
        marginTop: 0
    } 
}

export default CartItem;