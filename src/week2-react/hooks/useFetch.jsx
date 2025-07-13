import React, { useEffect, useState } from 'react';

function useFetch(baseURL, typeProp = 'users') {
    const [data, setData] = useState(null);
    const [type, setType] = useState(typeProp);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`${baseURL}/${type}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            });
    }, [type, baseURL]);

    const fetchData = (newType) => {
        setType(newType);
        setLoading(true);
    };

    return [data, fetchData, loading];
}

export default useFetch;
