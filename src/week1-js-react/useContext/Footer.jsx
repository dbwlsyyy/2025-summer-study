// Footer.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // ThemeContext 임포트

function Footer() {
    const { isDark } = useContext(ThemeContext); // isDark 상태만 가져옴

    const footerStyle = {
        backgroundColor: isDark ? '#222' : '#e0e0e0', // 다크 모드면 더 어둡게, 아니면 밝게
        color: isDark ? '#aaa' : '#666', // 텍스트 색상
        padding: '15px',
        textAlign: 'center',
        fontSize: '0.9em',
        borderTop: isDark ? '1px solid #444' : '1px solid #eee',
    };

    return (
        <footer style={footerStyle}>
            <p>© 2025 Context API 연습용 앱. 모든 권리 보유.</p>
            <p>현재 테마: {isDark ? '다크' : '라이트'}</p>
        </footer>
    );
}

export default Footer;
