import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // 모달 스타일 임포트

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null; // isOpen이 false면 아무것도 렌더링 안 함

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            {' '}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {' '}
                {/* 모달 내용 클릭 시 닫히지 않도록 */}
                <button className="modal-close-button" onClick={onClose}>
                    &times; {/* X 아이콘 */}
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

export default Modal;
