import React from 'react';

function Student({ dispatch, name, id, isHere }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                margin: '8px 0',
                borderRadius: '8px',
                background: isHere ? '#f0f0f0' : '#fff',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}
        >
            <span
                style={{
                    flex: 1,
                    color: isHere ? '#aaa' : '#222',
                    textDecoration: isHere ? 'line-through' : 'none',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                }}
                onClick={() => dispatch({ type: 'check', payload: { id } })}
                title="출석 체크"
            >
                {name}
            </span>
            <button
                onClick={() => {
                    dispatch({ type: 'delete-student', payload: { id } });
                }}
                style={{
                    background: '#ff6b6b',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    fontWeight: 500,
                    transition: 'background 0.2s',
                }}
            >
                삭제
            </button>
        </div>
    );
}

export default Student;
