import React, { useReducer, useState } from 'react';
import ProductCard from './ProductCard';
import CartItem from './CartItem';
import Modal from './Modal';
import OrderForm from './OrderForm';
import products from './product';
import './ShoppingCart.css';

function ShoppingCart() {
    // --- 미션1 : 장바구니 구현하기 (완료) ---
    // --- 미션2 : 새로운 모달 관련 디자인 코드 추가 ---

    const initialState = {
        items: [],
        isOpen: false,
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add-item': {
                const product = action.payload;
                const existingItem = state.items.find(
                    (item) => item.id === product.id
                );
                if (existingItem) {
                    return {
                        ...state,
                        items: state.items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    };
                } else {
                    const newItem = {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        imageUrl: product.imageUrl,
                    };
                    return { ...state, items: [...state.items, newItem] };
                }
            }
            case 'change-qty': {
                const product = action.payload.item;
                const qty = action.payload.newQty;
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: qty }
                            : item
                    ),
                };
            }
            case 'delete-item': {
                const product = action.payload;
                return {
                    ...state,
                    items: state.items.filter((item) => item.id !== product.id),
                };
            }
            default:
                return state;
        }
    };

    const [cartItems, dispatch] = useReducer(reducer, initialState);
    const totalAmount = cartItems.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="shopping-cart-container">
            <div className="product-list-section">
                <h2>✨ 상품 목록</h2>
                <div className="product-cards-wrapper">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            dispatch={dispatch}
                        />
                    ))}
                </div>
            </div>

            <div className="cart-section">
                <h2>🛒 내 장바구니</h2>
                {cartItems.items.length === 0 ? (
                    <p className="empty-cart-message">
                        장바구니가 비어있어요. 상품을 담아보세요!
                    </p>
                ) : (
                    <div className="cart-items-wrapper">
                        {cartItems.items.map((item) => (
                            <CartItem
                                key={item.id}
                                dispatch={dispatch}
                                item={item}
                            />
                        ))}
                    </div>
                )}
                <div className="cart-summary">
                    <h3>총액: {totalAmount.toLocaleString()}원</h3>
                    {/* 주문하기 버튼 클릭 시 모달 열기 */}
                    <button className="checkout-button" onClick={openModal}>
                        주문하기 (모달 열기)
                    </button>
                </div>
            </div>

            {/* 모달 컴포넌트 렌더링 */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {/* 모달 안에 들어갈 폼 컴포넌트 */}
                <OrderForm />
            </Modal>
        </div>
    );
}

export default ShoppingCart;
