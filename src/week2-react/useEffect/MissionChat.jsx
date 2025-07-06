import React, { useState, useRef, useEffect } from 'react';

function MissionChat() {
    const [messages, setMessages] = useState([
        { id: 1, text: '안녕하세요! 채팅 시뮬레이터입니다.' },
        {
            id: 2,
            text: '새로운 메시지가 추가되면 자동 스크롤됩니다. 버튼을 클릭해보세요!',
        },
    ]);
    const [isStop, setIsStop] = useState(false);
    const chatBoxRef = useRef(null);
    const nextMsgId = useRef(messages.length + 1);

    useEffect(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        if (isStop) return;
        const autoAdd = setInterval(() => {
            addMessage(
                `${nextMsgId.current} 번째 메시지 입니다. 이 메시지는 자동으로 입력됩니다.`
            );
        }, 3000);

        return () => {
            clearInterval(autoAdd);
        };
    }, [isStop]);

    const addMessage = (text) => {
        const newMsg = {
            id: nextMsgId.current,
            text: text,
        };
        setMessages((prevMessages) => [...prevMessages, newMsg]);
        nextMsgId.current += 1;
    };
    const handleAddMessage = () => {
        addMessage(`${nextMsgId.current} 번째 메시지 입니다.`);
    };

    return (
        <div
            style={{
                padding: '20px',
                maxWidth: '400px',
                margin: '0 auto',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <header
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '16px',
                }}
            >
                <h2 style={{ display: 'inline-block', margin: 0 }}>
                    💬 채팅 시뮬레이터
                </h2>
                <button
                    style={{
                        marginLeft: '10px',
                        color: 'black',
                        fontSize: '2rem',
                        padding: 0,
                        background: 'none',
                    }}
                    onClick={() => {
                        setIsStop((prev) => !prev);
                    }}
                >
                    {isStop ? '▶️' : '⏸️'}
                </button>
            </header>
            <div
                ref={chatBoxRef}
                style={{
                    height: '400px',
                    overflowY: 'scroll',
                    border: '1px solid #eee',
                    padding: '10px',
                    marginBottom: '15px',
                    backgroundColor: '#666',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '13px',
                }}
            >
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        style={{
                            backgroundColor: msg.id % 2 === 0 ? '#222' : '#333',
                            padding: '8px 12px',
                            borderRadius: '15px',
                            alignSelf:
                                msg.id % 2 === 0 ? 'flex-start' : 'flex-end',
                            textAlign: 'start',
                            maxWidth: '80%',
                            wordBreak: 'break-word',
                            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <button
                onClick={handleAddMessage}
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                ➕ 메시지 추가
            </button>
        </div>
    );
}

export default MissionChat;
