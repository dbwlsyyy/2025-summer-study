import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // ThemeContext 임포트
//import useThemeStore from './ThemeStore'; // zustand 스토어 임포트

function Header() {
    // useContext 훅으로 ThemeContext의 value를 가져옴
    const { isDark, setIsDark } = useContext(ThemeContext);

    // const isDark = useThemeStore((state) => state.isDark);
    // const setIsDark = useThemeStore((state) => state.toggleTheme);

    const headerStyle = {
        backgroundColor: isDark ? '#333' : '#f0f0f0', // 다크 모드면 어둡게, 아니면 밝게
        color: isDark ? '#fff' : '#333', // 텍스트 색상
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: isDark ? '1px solid #555' : '1px solid #ddd',
    };

    return (
        <header style={headerStyle}>
            <h2 id="time">{isDark ? '다크 모드' : '라이트 모드'} 활성화</h2>
            <button
                onClick={() => setIsDark(!isDark)} // setIsDark 함수로 isDark 상태 토글
                style={{
                    padding: '10px 15px',
                    fontSize: '1em',
                    cursor: 'pointer',
                    backgroundColor: isDark ? '#555' : '#ccc',
                    color: isDark ? '#fff' : '#333',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                테마 전환
            </button>
        </header>
    );
}

export default Header;
