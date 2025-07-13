// components/Card.jsx
import React from 'react';
import styles from './UseFetchCard.module.css';

function UseFetchCard({ title, body, subtitle }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
            <p>{body}</p>
        </div>
    );
}

export default UseFetchCard;
