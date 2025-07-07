import React from 'react';
import './CartItem.css'; // 장바구니 아이템 스타일을 위해 임포트

function CartItem({ dispatch, item }) {
    return (
        <div className="cart-item">
            <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
            />
            <div className="cart-item-info">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-details">
                    {item.price.toLocaleString()}원 x {item.quantity}개 ={' '}
                    {(item.price * item.quantity).toLocaleString()}원
                </p>
            </div>
            <input
                className="cart-item-qty"
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) => {
                    const newQty = Number(e.target.value);
                    dispatch({ type: 'change-qty', payload: { item, newQty } });
                }}
            />

            <button
                onClick={() => {
                    dispatch({ type: 'delete-item', payload: item });
                }}
                type="button"
                className="remove-item-button"
            >
                삭제
            </button>
        </div>
    );
}

export default CartItem;
