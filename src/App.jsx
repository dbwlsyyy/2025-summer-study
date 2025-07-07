import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UseEffectUserList from './week1-js-react/useEffect/UseEffectUserList';
import UseEffectTimer from './week1-js-react/useEffect/UseEffectTimer';
import UseEffectMouse from './week1-js-react/useEffect/UseEffectMouse';
import UseMemoCalculate from './week1-js-react/useCallback/UseMemoCalculate';
import RenderBox from './week1-js-react/useCallback/RenderBox';
import DarkMode from './week1-js-react/useContext/DarkMode';
import MissonApi from './week2-react/useEffect/MissonApi';
import MissionUseEffect from './week2-react/useEffect/MissionUseEffect';
import MissionChat from './week2-react/useEffect/MissionChat';
import MissionMovie from './week2-react/useEffect/MissionMovie';
import MissionUseCallback1 from './week2-react/useMemo_useCallback/Mission1/MissionUseCallback1';
import MissionUseCallback2 from './week2-react/useMemo_useCallback/Mssion2/MissionUseCallback2';
import UseReducerBank from './week2-react/useReducer/useReducerBank';
import UseReducerAttendance from './week2-react/useReducer/UseReducerAttendance';
import MissionCart from './week2-react/useReducer/Mission1/MissionCart';

function App() {
    return (
        <Router>
            <div style={{ padding: 20 }}>
                <h1>React Practice Lab</h1>

                <nav style={{ marginBottom: 40 }}>
                    <div style={{ marginBottom: 10 }}>
                        <button className="btn">
                            <Link to="/timer">timer 실습</Link>
                        </button>
                        <button className="btn">
                            <Link to="/userList">userList 실습</Link>
                        </button>
                        <button className="btn">
                            <Link to="/mouseTracker">mouseTracker 실습</Link>
                        </button>
                        <button className="btn">
                            <Link to="/calculate">calculate 실습</Link>
                        </button>

                        <button className="btn">
                            <Link to="/renderBox">renderBox 실습</Link>
                        </button>
                        <button className="btn">
                            <Link to="/darkMode">darkMode 실습</Link>
                        </button>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useEffect-mission">
                                useEffect 실습 미션
                            </Link>
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useEffect-mission-api">
                                useEffect API 미션
                            </Link>
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useEffect-mission-chat">
                                useEffect 채팅 미션
                            </Link>
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useEffect-mission-movie">
                                useEffect 무비 앱 미션
                            </Link>
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useCallback-mission1">
                                useCallback 미션 1
                            </Link>
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useCallback-mission2">
                                useCallback 미션 2
                            </Link>
                        </button>
                    </div>
                    <hr />
                    <div style={{ marginBottom: 10 }}>
                        <button className="btn">
                            <Link to="/useReducer-bank">reducerBank 실습</Link>
                        </button>
                        <button className="btn">
                            <Link to="/useReducer-attendance">출석부 실습</Link>
                        </button>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useReducer-mission-cart">
                                useReducer 장바구니 미션
                            </Link>
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useReducer-mission-wizard">
                                useReducer Wizard 앱 미션
                            </Link>
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#eee' }}
                        >
                            <Link to="/useReducer-mission-theme">
                                useReducer 테마 변경 미션
                            </Link>
                        </button>
                    </div>
                </nav>

                <Routes>
                    <Route path="/timer" element={<UseEffectTimer />} />
                    <Route path="/userList" element={<UseEffectUserList />} />
                    <Route path="/mouseTracker" element={<UseEffectMouse />} />
                    <Route path="/calculate" element={<UseMemoCalculate />} />
                    <Route path="/renderBox" element={<RenderBox />} />
                    <Route path="/darkMode" element={<DarkMode />} />
                    <Route
                        path="/useEffect-mission"
                        element={<MissionUseEffect />}
                    />
                    <Route
                        path="/useEffect-mission-API"
                        element={<MissonApi />}
                    />
                    <Route
                        path="/useEffect-mission-chat"
                        element={<MissionChat />}
                    />
                    <Route
                        path="/useEffect-mission-movie"
                        element={<MissionMovie />}
                    />
                    <Route
                        path="/useCallback-mission1"
                        element={<MissionUseCallback1 />}
                    />
                    <Route
                        path="/useCallback-mission2"
                        element={<MissionUseCallback2 />}
                    />
                    <Route
                        path="/useReducer-bank"
                        element={<UseReducerBank />}
                    />
                    <Route
                        path="/useReducer-attendance"
                        element={<UseReducerAttendance />}
                    />
                    <Route
                        path="/useReducer-mission-cart"
                        element={<MissionCart />}
                    />
                    <Route
                        path="/useReducer-mission-wizard"
                        element={<UseReducerBank />}
                    />
                    <Route
                        path="/useReducer-mission-theme"
                        element={<UseReducerAttendance />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
