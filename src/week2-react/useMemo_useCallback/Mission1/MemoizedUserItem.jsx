import React from 'react';

function MemoizedUserItem({ user, onUserClick }) {
    console.log('MemoizedUserItem 렌더링:', user.name);
    return (
        <div>
            <p>{user.name}</p>
            <button onClick={() => onUserClick(user.id)}>클릭</button>
        </div>
    );
}

export default React.memo(MemoizedUserItem);
