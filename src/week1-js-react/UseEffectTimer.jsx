import React, { useState, useEffect } from 'react';

function UseEffectTimer() {
    const [seconds, setSeconds] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // seconds 초기화용 useEffect
    useEffect(() => {
        if (!isVisible) {
            setSeconds(0);
        }
    }, [isVisible]);

    // 타이머 관리용 useEffect
    useEffect(() => {
        console.log('타이머 useEffect 실행 ⏲️');

        let intervalId;

        if (isVisible) {
            intervalId = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            console.log('클린업 함수 실행: 타이머 정리! 🧹');
            clearInterval(intervalId);
        };
    }, [isVisible]);
    // isVisible이 바뀔 때 useEffect가 다시 실행되도록 (테스트용)

    return (
        <div>
            <h2>클린업 함수 확인</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                컴포넌트 {isVisible ? '숨기기' : '보이기'}
            </button>

            {isVisible && (
                <div>
                    <p>타이머: {seconds}초</p>
                    <p>개발자 도구 콘솔을 확인해보세요!</p>
                </div>
            )}
        </div>
    );
}

export default UseEffectTimer;
