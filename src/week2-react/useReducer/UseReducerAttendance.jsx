import React, { useReducer, useState } from 'react';
import Student from './Student';

const styles = {
    container: {
        maxWidth: '400px',
        margin: '40px auto',
        padding: '24px',
        borderRadius: '12px',
        background: '#999',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        fontFamily: 'sans-serif',
    },
    title: {
        marginBottom: '8px',
        color: 'black',
    },
    count: {
        marginBottom: '16px',
        fontWeight: 'bold',
        color: '#222',
    },
    inputRow: {
        display: 'flex',
        gap: '8px',
        marginBottom: '20px',
    },
    input: {
        flex: 1,
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '8px 16px',
        background: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    studentList: {
        marginTop: '12px',
    },
};

const initialState = {
    count: 0,
    students: [{ id: Date.now(), name: '제임스', isHere: false }],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'add-student': {
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };
        }
        case 'delete-student': {
            return {
                count: state.count - 1,
                students: state.students.filter(
                    (student) => student.id !== action.payload.id
                ),
            };
        }
        case 'check': {
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere };
                    }
                    return student;
                }),
            };
        }
        default:
            return state;
    }
};

function UseReducerAttendance() {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>☑️ 출석부 (클릭하여 체크)</h2>
            <p style={styles.count}>학생 수 : {studentsInfo.count}</p>
            <div style={styles.inputRow}>
                <input
                    style={styles.input}
                    type="text"
                    value={name}
                    placeholder="이름을 입력하세요"
                    onChange={(e) => setName(e.target.value)}
                />
                <button
                    style={styles.button}
                    onClick={() => {
                        if (name.trim()) {
                            dispatch({
                                type: 'add-student',
                                payload: { name },
                            });
                            setName('');
                        }
                    }}
                >
                    추가
                </button>
            </div>
            <div style={styles.studentList}>
                {studentsInfo.students.map((student) => (
                    <Student
                        key={student.id}
                        dispatch={dispatch}
                        name={student.name}
                        id={student.id}
                        isHere={student.isHere}
                    />
                ))}
            </div>
        </div>
    );
}

export default UseReducerAttendance;
