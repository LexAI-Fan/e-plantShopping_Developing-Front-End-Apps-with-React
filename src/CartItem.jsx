import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

    const handleIncrement = (item) => {
        dispatch(updateQuantity({
            id: item.id,
            quantity: item.quantity + 1
        }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity - 1
            }));
        } else {
            dispatch(removeItem(item.id));
        }
    };

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    const calculateTotalCost = (item) => {
        return (item.price * item.quantity).toFixed(2);
    };

    if (items.length === 0) {
        return (
            <div className="cart-container">
                <h2>购物车</h2>
                <p>您的购物车是空的</p>
                <button className="continue-shopping" onClick={onContinueShopping}>
                    继续购物
                </button>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>购物车</h2>
            
            <div className="cart-summary">
                <p>总数量: {totalQuantity}</p>
                <p>总价格: ${totalAmount.toFixed(2)}</p>
            </div>

            <div className="cart-items">
                {items.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3 className="cart-item-name">{item.name}</h3>
                            <p className="cart-item-description">{item.description}</p>
                            <p className="cart-item-price">单价: ${item.price}</p>
                        </div>
                        <div className="quantity-controls">
                            <button onClick={() => handleDecrement(item)}>-</button>
                            <span className="quantity">{item.quantity}</span>
                            <button onClick={() => handleIncrement(item)}>+</button>
                        </div>
                        <div className="item-total">
                            小计: ${calculateTotalCost(item)}
                        </div>
                        <button 
                            onClick={() => handleRemove(item.id)}
                            className="delete-btn"
                        >
                            删除
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-actions">
                <button className="checkout-btn" onClick={handleCheckoutShopping}>
                    结账
                </button>
                <button className="continue-shopping" onClick={onContinueShopping}>
                    继续购物
                </button>
            </div>
        </div>
    );
}

export default CartItem;