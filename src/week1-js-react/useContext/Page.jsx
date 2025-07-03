import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Page() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Page;
