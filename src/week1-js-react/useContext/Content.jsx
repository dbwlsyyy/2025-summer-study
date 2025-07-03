// Content.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // ThemeContext 임포트

function Content() {
    const { isDark } = useContext(ThemeContext); // isDark 상태만 가져옴

    const contentStyle = {
        backgroundColor: isDark ? '#444' : '#fff', // 다크 모드면 중간 어둡기, 아니면 흰색
        color: isDark ? '#fff' : '#333', // 텍스트 색상
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    };

    return (
        <main style={contentStyle}>
            <h2>여기는 메인 콘텐츠 영역입니다.</h2>
            <p>현재 테마는 {isDark ? '다크 모드' : '라이트 모드'}입니다.</p>
            <p>Context API를 통해 테마 상태를 공유하고 있습니다.</p>
        </main>
    );
}

export default Content;
