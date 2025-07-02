import React, { useCallback, useState } from 'react';
import Box from './Box';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function RenderBox() {
    const [currentSize, setCurrentSize] = useState(50);
    const [inputSize, setInputSize] = useState(50);
    const [boxColor, setBoxColor] = useState(getRandomColor());
    const [errM, setErrM] = useState('');
    const [isDark, setIsDark] = useState(true);

    const createBox = useCallback(() => {
        console.log('✨ createBoxStyle 객체 재생성!');

        return {
            backgroundColor: boxColor,
            width: `${currentSize}px`,
            height: `${currentSize}px`,
            minWidth: '50px',
            minHeight: '50px',
            color: 'black',
            border: '10px solid #333',
            display: 'flex', // 박스 내부 텍스트도 가운데 정렬하려면 flexbox
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '1.5em',
            transition: 'background-color 0.2s ease-in-out',
            marginTop: '40px',
        };
    }, [currentSize, boxColor]);

    const changeSize = (e) => {
        const inputValue = e.target.value;
        setInputSize(inputValue);

        const newSize = parseInt(inputValue);

        if (isNaN(newSize) || inputValue === '') {
            setErrM('숫자를 입력해주세요.');
            setBoxColor('black');
            return;
        }

        if (newSize < 50) {
            setErrM('박스 크기는 50 X 50 이상이어야 합니다 !');
            setBoxColor('black');
        } else {
            setErrM(''); // 유효한 값이면 에러 메시지 제거
            setCurrentSize(newSize);
            setBoxColor(getRandomColor());
        }
    };

    return (
        <div
            style={{
                display: 'flex', // Flex 컨테이너
                flexDirection: 'column', // 아이템들을 세로로 (인풋 위에 박스)
                justifyContent: 'center', // 세로축(column)에서 가운데 정렬
                alignItems: 'center', // 가로축(cross-axis)에서 가운데 정렬
                backgroundColor: isDark ? 'black' : 'white',
                padding: '30px 0',
                minHeight: '300px',
            }}
        >
            <input
                style={{
                    padding: '10px',
                    fontSize: '1.2em',
                    border: errM ? '2px solid red' : '1px solid #ccc',
                }}
                type="number"
                value={inputSize}
                onChange={changeSize}
                placeholder="박스 크기 : 50 이상"
            />
            <p
                style={{
                    color: 'red',
                    fontSize: '0.9em',
                    marginBottom: '20px',
                }}
            >
                {errM}
            </p>
            <button
                onClick={() => {
                    setIsDark(!isDark);
                }}
            >
                Change Theme
            </button>

            <Box createBoxStyle={createBox} />
        </div>
    );
}
export default RenderBox;
