import React from 'react';
import './Modal.css'; // 모달 스타일 임포트

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null; // isOpen이 false면 아무것도 렌더링 안 함

    return (
        <div className="modal-overlay" onClick={onClose}>
            {' '}
            {/* 배경 클릭 시 닫기 */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {' '}
                {/* 모달 내용 클릭 시 닫히지 않도록 */}
                <button className="modal-close-button" onClick={onClose}>
                    &times; {/* X 아이콘 */}
                </button>
                {children} {/* 모달 안에 들어갈 내용 (OrderForm) */}
            </div>
        </div>
    );
}

export default Modal;
