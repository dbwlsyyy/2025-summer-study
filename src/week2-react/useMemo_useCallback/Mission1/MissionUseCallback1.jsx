// UserListParent.js
import React, { useState, useCallback, useMemo } from 'react';
import MemoizedUserItem from './MemoizedUserItem';

function MissionUseCallback1() {
    const [message, setMessage] = useState('');
    const users = useMemo(() => {
        return [
            { id: 1, name: '철수' },
            { id: 2, name: '영희' },
        ];
    }, []);

    const handleUserClick = useCallback((userId) => {
        console.log('사용자 클릭됨:', userId);
    }, []);

    return (
        <div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="메시지 입력"
            />
            {users.map((user) => (
                <MemoizedUserItem
                    key={user.id}
                    user={user}
                    onUserClick={handleUserClick}
                />
            ))}
        </div>
    );
}

export default MissionUseCallback1;
