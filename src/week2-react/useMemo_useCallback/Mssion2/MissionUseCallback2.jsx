import React, { useCallback, useMemo, useState } from 'react'; // useMemo, useCallback 제거
import DataWidget from './DataWidget';
import ControlWidget from './ControlWidget';
import InfoDisplayWidget from './InfoDisplayWidget';

function MissionUseCallback2() {
    const [globalFilterText, setGlobalFilterText] = useState('');
    const [settings, setSettings] = useState({
        theme: 'dark',
        itemsPerPage: 10,
    });

    console.log('Dashboard 렌더링');

    const data = useMemo(() => {
        return Array.from({ length: 5000 }, (_, i) => ({
            id: i,
            value: i,
            text: `Item ${i}`,
        }));
    }, []);

    const onApplyFilter = useCallback((text) => {
        setGlobalFilterText(text);
    }, []);

    const onToggleTheme = useCallback(() => {
        setSettings((prev) => ({
            ...prev,
            theme: prev.theme === 'light' ? 'dark' : 'light',
        }));
    }, []);

    const currentSettings = useMemo(() => {
        return { ...settings };
    }, [settings]);

    return (
        <div style={dashboardStyles.container}>
            <h1 style={dashboardStyles.heading}>✨ 대시보드 ✨</h1>

            <div style={dashboardStyles.widgetContainer}>
                {/* 컨트롤 위젯 */}
                <div style={dashboardStyles.widgetBox}>
                    <ControlWidget
                        onApplyFilter={onApplyFilter}
                        onToggleTheme={onToggleTheme}
                    />
                </div>

                {/* 데이터 위젯 */}
                <div style={dashboardStyles.widgetBox}>
                    <DataWidget items={data} filterText={globalFilterText} />
                </div>

                {/* 정보 표시 위젯 */}
                <div style={dashboardStyles.widgetBox}>
                    <InfoDisplayWidget currentSettings={currentSettings} />
                </div>
            </div>
        </div>
    );
}

const dashboardStyles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px', // 패딩 줄여서 컴팩트하게
        backgroundColor: '#222222', // 메인 배경
        minHeight: '100vh',
        color: '#eeeeee', // 기본 텍스트 색상
        display: 'flex', // 중앙 정렬을 위해 flexbox 사용
        flexDirection: 'column',
        alignItems: 'center', // 가로 중앙 정렬
    },
    heading: {
        textAlign: 'center',
        color: '#00aaff', // 강조색
        marginBottom: '30px', // 마진 줄임
        fontSize: '2.2em', // 폰트 사이즈 줄임
        fontWeight: 'bold',
    },
    widgetContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr', // 한 줄에 하나씩 (세로로 쌓이게)
        gap: '20px', // 위젯 간 간격 줄임
        maxWidth: '500px', // 최대 너비 설정 (크롬 절반 화면 고려)
        width: '100%', // 부모 컨테이너에 꽉 차게
    },
    widgetBox: {
        backgroundColor: '#333333', // 위젯 배경
        padding: '20px', // 패딩 줄임
        borderRadius: '8px', // 둥근 모서리
        boxShadow: '0 4px 8px rgba(0,0,0,0.4)', // 그림자
        border: '1px solid #555555', // 경계선
    },
};

export default MissionUseCallback2;
