import React from 'react';
import useFetch from './hooks/useFetch';
import Card from '../components/UseFetchCard';
import BounceLoader from 'react-spinners/BounceLoader';

const baseURL = 'https://jsonplaceholder.typicode.com';

function UseFetchComponent() {
    const [data, fetchData, loading] = useFetch(baseURL);

    return (
        <div
            style={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1>useFetch 카드 렌더링</h1>
            <div style={{ marginBottom: '1rem' }}>
                <button onClick={() => fetchData('users')}>users</button>
                <button onClick={() => fetchData('posts')}>posts</button>
                <button onClick={() => fetchData('photos')}>photos</button>
            </div>

            {loading ? (
                <BounceLoader
                    color="rgb(253, 255, 231)"
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                <p>패치 완료</p>
            )}
            <div style={{ display: 'inline-block' }}>
                {Array.isArray(data) &&
                    data.map((item) => (
                        <Card
                            key={item.id}
                            title={item.name || item.title}
                            subtitle={item.email || item.username}
                            body={item.body || item.url}
                        />
                    ))}
            </div>
        </div>
    );
}

export default UseFetchComponent;
