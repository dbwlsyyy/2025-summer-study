import React from 'react';
import './ProductCard.css';

function ProductCard({ product, dispatch }) {
    return (
        <div className="product-card">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
            />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                    {product.price.toLocaleString()}원
                </p>
                <button
                    onClick={() =>
                        dispatch({ type: 'add-item', payload: product })
                    }
                    type="button"
                    className="add-to-cart-button"
                >
                    장바구니에 추가
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
