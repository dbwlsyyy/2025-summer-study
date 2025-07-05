import { useEffect, useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // 스피너 라이브러리 추가 (선택 사항)

// ✅ 미션 3 : 외부 데이터와 사용자 입력에 반응 - 검색 결과 자동 업데이트 및 로딩 상태 관리
function MissionUseEffect() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState('');

    useEffect(() => {
        const fetchResults = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`
                );
                const filteredData = response.data.filter(
                    (post) =>
                        post.title.includes(searchTerm) ||
                        post.body.includes(searchTerm)
                );
                setResults(filteredData);
            } catch (error) {
                console.error(error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        const timer = setTimeout(() => {
            fetchResults();
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [searchTerm]);

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    검색창
                    <br />
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                        placeholder="검색어를 입력해주세요."
                    />
                </label>
            </form>
            {isLoading && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100px',
                    }}
                >
                    <ClipLoader color="#36d7b7" size={50} />
                    <p style={{ marginLeft: '10px', color: '#555' }}>
                        데이터 불러오는 중...
                    </p>
                </div>
            )}

            <div>
                <ul>
                    {results.length === 0 && searchTerm.trim() !== ''
                        ? ''
                        : results.map((res) => (
                              <li key={res.id}>{res.title}</li>
                          ))}
                </ul>
            </div>
        </div>
    );
}

export default MissionUseEffect;

// ✅ 미션 1 : 라이프사이클 이해하기
//
// const [isVisible, setIsVisible] = useState(true);
//     useEffect(() => {
//         console.log('componenet 마운트');
//         return () => {
//             console.log('component 언마운트, 정리작업 수행');
//         };
//     }, []);
//     return (
//         <div>
//             <h3>isVisible state : {isVisible ? 'true' : 'false'}</h3>
//             <button
//                 onClick={() => {
//                     setIsVisible(!isVisible);
//                 }}
//             >
//                 click
//             </button>
//         </div>
//     );
// }

// ✅ 미션 2 : 타이머
//
// function AutoIncreasementCounter() {
//     const [second, setSecond] = useState(0);
//     useEffect(() => {
//         console.log('타이머 시작');
//         setSecond(0);
//         const time = setInterval(() => {
//             setSecond((prev) => prev + 1);
//         }, 1000);
//         return () => {
//             clearInterval(time);
//             console.log('타이머 멈춤');
//         };
//     }, []);
//     return (
//         <div>
//             <span>counter : {second}</span>
//         </div>
//     );
// }
// function UseEffectMission() {
//     const [isShow, setIsShow] = useState(false);
//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     setIsShow(!isShow);
//                 }}
//             >
//                 {isShow ? 'hide' : 'show'}
//             </button>
//             {isShow ? <AutoIncreasementCounter /> : ''}
//         </div>
//     );
// }
// export default UseEffectMission;
