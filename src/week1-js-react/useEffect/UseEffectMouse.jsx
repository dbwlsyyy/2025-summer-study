import React, { useEffect, useState } from 'react';

function UseEffectMouse() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        console.log('Mouse Tracker 작동 중 !');

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            console.log(
                'MouseTracker 클린업 함수 실행: 마우스 이벤트 리스너 제거'
            );
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <h3>마우스 좌표 추적기</h3>
            <p
                style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: 'yellow',
                }}
            >
                마우스 X: {position.x}, 마우스 Y: {position.y}
            </p>
            <p>이 추적기는 컴포넌트가 화면에서 사라지면 작동을 멈춥니다.</p>
        </div>
    );
}

export default UseEffectMouse;
