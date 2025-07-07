import React from 'react';
import './OrderForm.css'; // 폼 스타일 임포트

function OrderForm() {
    return (
        <div className="order-form-container">
            <h2>결제 정보 입력</h2>
            <form className="payment-form">
                <div className="form-group">
                    <label htmlFor="name">이름:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="이름을 입력하세요"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">주소:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="주소를 입력하세요"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">이메일:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="이메일을 입력하세요"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cardNumber">카드 번호:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                    />
                </div>
                <button type="submit" className="submit-payment-button">
                    결제하기 (기능 없음)
                </button>
            </form>
            <p className="payment-status-message">
                {/* 결제 상태 메시지 (로딩, 성공, 실패 등) */}
                결제 대기 중...
            </p>
        </div>
    );
}

export default OrderForm;
