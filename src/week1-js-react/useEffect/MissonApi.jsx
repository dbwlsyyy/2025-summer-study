import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

function MissonApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        if (!shouldFetch || isLoading) {
            return;
        }

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            setUsers([]);

            try {
                console.log('데이터 기다리는 중 ..');
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                setUsers(response.data);
                console.log('데이터 불러오기 완료');
            } catch (error) {
                setError(error.message);
                console.error('err : ', error.message);
                setUsers([]);
            } finally {
                setIsLoading(false);
                setShouldFetch(false);
            }
        };

        fetchData();
    }, [shouldFetch]);

    return (
        <div>
            <button
                onClick={() => {
                    setShouldFetch(true);
                }}
                disabled={isLoading}
            >
                {isLoading
                    ? '불러오는 중 ...'
                    : users.length > 0
                    ? '새로고침'
                    : '데이터 불러오기'}
            </button>

            {error ? 'err' : ''}

            <div>
                {isLoading ? (
                    <>
                        <div style={{ margin: '2rem' }}></div>
                        <ClipLoader color="#36d7b7" size={50} />
                        <p style={{ marginLeft: '10px', color: '#555' }}>
                            데이터 불러오는 중...
                        </p>{' '}
                    </>
                ) : (
                    <div style={{ marginTop: '20px' }}>
                        <h3>사용자 목록</h3>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {users.map((user) => (
                                <li
                                    key={user.id}
                                    style={{
                                        textAlign: 'left',
                                        padding: '8px 10px',
                                        borderBottom: '1px dashed #eee',
                                        borderRadius: '4px',
                                        marginBottom: '5px',
                                    }}
                                >
                                    <strong>{user.name}</strong> ({user.email})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MissonApi;
