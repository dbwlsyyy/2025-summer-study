import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BeatLoader, ClipLoader, DotLoader } from 'react-spinners';

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function MissionMovie() {
    const [searchTerm, setSearchTerm] = useState('');
    const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (submittedSearchTerm.trim() === '') {
            setResults([]);
            setIsLoading(false);
            setError(null);
            return;
        }

        setIsLoading(true);
        setResults([]);
        setError(null);

        const fetchMovie = async () => {
            try {
                const response = await axios.get(
                    `http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&t=${submittedSearchTerm}`
                );

                if (response.data.Response === 'False') {
                    setError(response.data.Error);
                    setResults([]);
                } else {
                    setResults(response.data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovie();
    }, [submittedSearchTerm]);

    const handleSearch = () => {
        setSubmittedSearchTerm(searchTerm);
    };

    return (
        <div
            style={{
                padding: '20px',
                maxWidth: '600px',
                margin: '0 auto',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#111',
            }}
        >
            <h2>Movie Searching APP</h2>
            <div
                style={{
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="영화를 검색해보세요."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '400px',
                        padding: '8px',
                        marginRight: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                    }}
                ></input>
                <button
                    onClick={handleSearch}
                    style={{
                        padding: '8px 15px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: '#007bff',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    검색
                </button>
            </div>

            {isLoading ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '40px',
                    }}
                >
                    <BeatLoader color="#36d7b7" size={30} />
                    <p style={{ marginTop: '10px', color: '#999' }}>
                        데이터 불러오는 중...
                    </p>
                </div>
            ) : error ? (
                <div
                    style={{
                        color: 'red',
                        textAlign: 'center',
                        marginTop: '20px',
                    }}
                >
                    <p>에러: {error}</p>
                </div>
            ) : results && results.Response === 'True' ? (
                <div style={{ marginTop: '20px' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            padding: '10px',
                        }}
                    >
                        {results.Poster && results.Poster !== 'N/A' ? (
                            <img
                                src={results.Poster}
                                alt={results.Title}
                                style={{
                                    maxWidth: '200px',
                                    height: 'auto',
                                    border: '2px solid #eee',
                                }}
                            />
                        ) : (
                            <div
                                style={{
                                    width: '200px',
                                    height: '300px',
                                    border: '1px solid #ddd',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#f0f0f0',
                                    color: '#888',
                                }}
                            >
                                No Poster
                            </div>
                        )}
                    </div>
                    <div style={{ textAlign: 'left', padding: '10px' }}>
                        <h2>
                            {results.Title} ({results.Year})
                        </h2>
                        <p>
                            <strong>- 감독: </strong>
                            {results.Director}
                        </p>
                        <p>
                            <strong>- 배우: </strong>
                            {results.Actors}
                        </p>
                        <p>
                            <strong>- 장르: </strong>
                            {results.Genre}
                        </p>
                        <p>
                            <strong>- 줄거리: </strong>
                            {results.Plot}
                        </p>
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        textAlign: 'center',
                        color: '#888',
                        marginTop: '20px',
                    }}
                >
                    {submittedSearchTerm.trim() !== ''
                        ? '검색 결과가 없습니다.'
                        : '영화를 검색해보세요.'}
                </div>
            )}
        </div>
    );
}
export default MissionMovie;
