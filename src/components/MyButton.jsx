import React from 'react';
import { Link } from 'react-router-dom';
import './MyButton.css';

function MyButton({ to, children, primary = false }) {
    const buttonClass = `btn ${primary ? 'btn-mission' : ''}`;

    return (
        <button className={buttonClass}>
            <Link to={to}>{children}</Link>
        </button>
    );
}

export default MyButton;
