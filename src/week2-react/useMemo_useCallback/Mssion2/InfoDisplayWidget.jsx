import React from 'react';

function InfoDisplayWidget({ currentSettings }) {
    console.log('InfoDisplayWidget 렌더링');

    const themeBgColor =
        currentSettings.theme === 'dark' ? '#444444' : '#f9f9f9';
    const themeTextColor =
        currentSettings.theme === 'dark' ? '#eeeeee' : '#333333';

    return (
        <div style={{ ...infoStyles.container, backgroundColor: themeBgColor }}>
            <h3 style={{ ...infoStyles.title, color: themeTextColor }}>
                💡 정보 표시 위젯
            </h3>
            <div style={infoStyles.content}>
                <p style={{ ...infoStyles.info, color: themeTextColor }}>
                    테마:{' '}
                    <span style={infoStyles.value}>
                        {currentSettings.theme === 'light'
                            ? '밝음 ☀️'
                            : '어두움 🌙'}
                    </span>
                </p>
                <p style={{ ...infoStyles.info, color: themeTextColor }}>
                    페이지당 아이템 수:{' '}
                    <span style={infoStyles.value}>
                        {currentSettings.itemsPerPage}개
                    </span>
                </p>
            </div>
        </div>
    );
}

export default React.memo(InfoDisplayWidget);

const infoStyles = {
    container: {
        padding: '15px',
        borderRadius: '6px',
        border: '1px solid #555555',
        transition: 'background-color 0.3s ease',
    },
    title: {
        color: '#00aaff', // 강조색
        marginBottom: '15px',
        fontSize: '1.4em',
        borderBottom: '1px solid #555555',
        paddingBottom: '8px',
    },
    content: {
        marginBottom: '5px',
    },
    info: {
        fontSize: '1em',
        marginBottom: '5px',
    },
    value: {
        fontWeight: 'bold',
        color: '#00aaff', // 강조색
    },
};
