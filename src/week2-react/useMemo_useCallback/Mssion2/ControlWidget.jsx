import React, { useState } from 'react';

function ControlWidget({ onApplyFilter, onToggleTheme }) {
    console.log('ControlWidget 렌더링'); // 렌더링 확인용
    const [inputText, setInputText] = useState('');

    const handleFilterClick = () => {
        onApplyFilter(inputText);
        alert(`'${inputText}'(으)로 필터 적용 요청!`);
        setInputText('');
    };

    return (
        <div style={controlStyles.container}>
            <h3 style={controlStyles.title}>⚙️ 컨트롤 위젯</h3>
            <div style={controlStyles.inputGroup}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="필터 텍스트 입력..."
                    style={controlStyles.input}
                />
                <button
                    onClick={handleFilterClick}
                    style={controlStyles.button}
                >
                    필터 적용
                </button>
            </div>
            <button
                onClick={onToggleTheme}
                style={{
                    ...controlStyles.button,
                    ...controlStyles.themeButton,
                }}
            >
                테마 토글
            </button>
        </div>
    );
}

export default React.memo(ControlWidget);

const controlStyles = {
    container: {
        padding: '15px',
        borderRadius: '6px',
        backgroundColor: '#333333',
    },
    title: {
        color: '#00aaff', // 강조색
        marginBottom: '15px',
        fontSize: '1.4em',
        borderBottom: '1px solid #555555',
        paddingBottom: '8px',
    },
    inputGroup: {
        display: 'flex',
        gap: '8px', // 간격 줄임
        marginBottom: '15px',
    },
    input: {
        flexGrow: '1',
        padding: '10px', // 패딩 줄임
        borderRadius: '5px',
        border: '1px solid #777777',
        backgroundColor: '#444444', // 입력창 배경
        color: '#eeeeee', // 입력창 텍스트
        fontSize: '0.9em',
        outline: 'none',
    },
    button: {
        padding: '10px 15px', // 패딩 줄임
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#00aaff', // 강조색
        color: '#222222', // 대비 텍스트
        cursor: 'pointer',
        fontSize: '0.9em',
        fontWeight: 'bold',
    },
    themeButton: {
        backgroundColor: '#00aaff', // 강조색
        width: '100%',
        marginTop: '10px',
    },
};
