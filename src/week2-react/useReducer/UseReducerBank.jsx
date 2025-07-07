import React, { useReducer, useState } from 'react';

const ACTION_TYPE = {
    deposit: 'deposit',
    withdraw: 'withdraw',
};
const reducer = (state, action) => {
    console.log('reducer이 일하는 중', state, action);

    switch (action.type) {
        case ACTION_TYPE.deposit:
            return state + action.payload;
        case ACTION_TYPE.withdraw:
            if (state < action.payload) {
                alert('잔액이 부족합니다. 다시 시도해주세요.');
                return state;
            }
            return state - action.payload;
        default:
            return state;
    }
};
function UseReducerBank() {
    const [num, setNum] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);

    return (
        <div
            style={{
                maxWidth: '350px',
                margin: '40px auto',
                padding: '30px',
                border: '2px solid #4a90e2',
                borderRadius: '12px',
                background: '#f7fbff',
                boxShadow: '0 4px 12px rgba(74,144,226,0.08)',
            }}
        >
            <h2 style={{ color: 'darkBlue', marginBottom: '20px' }}>
                안녕하세요. reducer 은행 입니다.
            </h2>
            <p
                style={{
                    color: '#2d3e50',
                    fontSize: '1.2rem',
                    marginBottom: '20px',
                }}
            >
                <b>고객님의 잔액 :</b>{' '}
                <span style={{ color: '#2d3e50' }}>{money}</span>
            </p>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value))}
                step={1000}
                style={{
                    width: '330px',
                    padding: '10px',
                    marginBottom: '15px',
                    border: '1px solid #b0c4de',
                    borderRadius: '6px',
                    fontSize: '1rem',
                }}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={() =>
                        dispatch({ type: ACTION_TYPE.deposit, payload: num })
                    }
                    style={{
                        flex: 1,
                        padding: '10px 0',
                        background: '#4a90e2',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    예금
                </button>
                <button
                    onClick={() =>
                        dispatch({ type: ACTION_TYPE.withdraw, payload: num })
                    }
                    style={{
                        flex: 1,
                        padding: '10px 0',
                        background: '#e94e77',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    출금
                </button>
            </div>
        </div>
    );
}

export default UseReducerBank;
