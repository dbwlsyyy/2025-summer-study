import React from 'react';
import './MissionCart.css'; // 기본 스타일을 위해 App.css 임포트
import ShoppingCart from './ShoppingCart';

function MissionCart() {
    return (
        <div id="cart">
            <h1 id="h1">🛍️ 장바구니 앱</h1>
            <ShoppingCart />
        </div>
    );
}

export default MissionCart;
