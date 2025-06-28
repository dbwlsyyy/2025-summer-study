import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

function UseEffectUserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('UserList 컴포넌트 마운트');

        const getData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );
                if (!response.ok) {
                    throw new Error('HTTP ERROR : ', response.status);
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.error('error : ', err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px',
                }}
            >
                <ClipLoader color="#36d7b7" size={150} />
                {/* 👈 스피너 컴포넌트! */}
                {/* color: 스피너 색상, size: 크기 (px 단위) */}
            </div>
        );
    }

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li style={{ textAlign: 'left' }} key={user.id}>
                        <strong>{user.name}</strong> ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UseEffectUserList;
