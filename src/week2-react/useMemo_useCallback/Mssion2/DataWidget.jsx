import React, { useMemo } from 'react';

function DataWidget({ items, filterText }) {
    console.log('DataWidget 렌더링'); // 렌더링 확인용

    const filteredItems = useMemo(() => {
        console.log('🔍 DataWidget: 무거운 필터링 연산 실행 중...');
        return items.filter((item) => {
            for (let i = 0; i < 10000; i++);
            return item.text.toLowerCase().includes(filterText.toLowerCase());
        });
    }, [items, filterText]);

    return (
        <div style={widgetStyles.container}>
            <h3 style={widgetStyles.title}>📊 데이터 위젯</h3>
            <div style={widgetStyles.content}>
                <p style={widgetStyles.info}>
                    총 아이템:{' '}
                    <span style={widgetStyles.value}>{items.length}개</span>
                </p>
                <p style={widgetStyles.info}>
                    필터링된 아이템:{' '}
                    <span style={widgetStyles.value}>
                        {filteredItems.length}개
                    </span>
                </p>
            </div>
            <p style={widgetStyles.note}>
                (필터링된 아이템 목록은 성능 상 렌더링 생략)
            </p>
        </div>
    );
}

export default React.memo(DataWidget);

const widgetStyles = {
    container: {
        padding: '15px', // 패딩 줄임
        borderRadius: '6px',
        backgroundColor: '#333333',
    },
    title: {
        color: '#00aaff', // 강조색
        marginBottom: '15px', // 마진 줄임
        fontSize: '1.4em',
        borderBottom: '1px solid #555555', // 구분선
        paddingBottom: '8px',
    },
    content: {
        marginBottom: '15px',
    },
    info: {
        color: '#eeeeee', // 기본 텍스트
        fontSize: '1em',
        marginBottom: '5px',
    },
    value: {
        fontWeight: 'bold',
        color: '#00aaff', // 강조색
    },
    note: {
        fontSize: '0.8em',
        color: '#b0b0b0', // 뮤트된 텍스트
        marginTop: '10px',
        fontStyle: 'italic',
        textAlign: 'center',
    },
};
