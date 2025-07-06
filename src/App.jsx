import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UseEffectUserList from './week1-js-react/useEffect/UseEffectUserList';
import UseEffectTimer from './week1-js-react/useEffect/UseEffectTimer';
import UseEffectMouse from './week1-js-react/useEffect/UseEffectMouse';
import Calculate from './week1-js-react/useMemo/Calculate';
import RenderBox from './week1-js-react/useCallback/RenderBox';
import DarkMode from './week1-js-react/useContext/DarkMode';
import MissonApi from './week1-js-react/useEffect/MissonApi';
import MissionUseEffect from './week1-js-react/useEffect/MissionUseEffect';
import MissionChat from './week1-js-react/useEffect/MissionChat';
import MissionMovie from './week1-js-react/useEffect/MissionMovie';

function App() {
    return (
        <Router>
            <div style={{ padding: 20 }}>
                <h1>React Practice Lab</h1>

                <nav style={{ marginBottom: 40 }}>
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

                    <hr />
                    <button className="btn" style={{ backgroundColor: '#eee' }}>
                        <Link to="/useEffect-mission">useEffect 미션</Link>
                    </button>
                    <button className="btn" style={{ backgroundColor: '#eee' }}>
                        <Link to="/useEffect-mission-api">
                            useEffect API 미션
                        </Link>
                    </button>
                    <button className="btn" style={{ backgroundColor: '#eee' }}>
                        <Link to="/useEffect-mission-chat">
                            useEffect 채팅 미션
                        </Link>
                    </button>
                    <button className="btn" style={{ backgroundColor: '#eee' }}>
                        <Link to="/useEffect-mission-movie">
                            useEffect 무비 앱 미션
                        </Link>
                    </button>
                </nav>

                <Routes>
                    <Route path="/timer" element={<UseEffectTimer />} />
                    <Route path="/userList" element={<UseEffectUserList />} />
                    <Route path="/mouseTracker" element={<UseEffectMouse />} />
                    <Route path="/calculate" element={<Calculate />} />
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
                    <Route path="/renderBox" element={<RenderBox />} />
                    <Route path="/darkMode" element={<DarkMode />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
