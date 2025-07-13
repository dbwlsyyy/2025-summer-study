import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
import MyButton from './components/MyButton';
import UseFetchComponent from './week2-react/UseFetchComponent';

function App() {
    return (
        <BrowserRouter>
            <div style={{ padding: 20 }}>
                <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <h1>React Practice Lab</h1>
                </Link>

                <nav style={{ marginBottom: 40 }}>
                    <div className="space">
                        <MyButton to="/timer">timer 실습</MyButton>
                        <MyButton to="/userList">userList 실습</MyButton>
                        <MyButton to="/mouseTracker">
                            mouseTracker 실습
                        </MyButton>
                        <MyButton to="/calculate">calculate 실습</MyButton>
                        <MyButton to="/renderBox">renderBox 실습</MyButton>
                        <MyButton to="/darkMode">darkMode 실습</MyButton>
                    </div>
                    <div className="space">
                        <MyButton to="/useEffect-mission" primary>
                            useEffect 실습 미션
                        </MyButton>
                        <MyButton to="/useEffect-mission-api" primary>
                            useEffect API 미션
                        </MyButton>
                        <MyButton to="/useEffect-mission-chat" primary>
                            useEffect 채팅 미션
                        </MyButton>
                        <MyButton to="/useEffect-mission-movie" primary>
                            useEffect 무비 앱 미션
                        </MyButton>
                        <MyButton to="/useCallback-mission1" primary>
                            useCallback 미션 1
                        </MyButton>
                        <MyButton to="/useCallback-mission2" primary>
                            useCallback 미션 2
                        </MyButton>
                    </div>
                    <hr />
                    <div className="space">
                        <MyButton to="/useReducer-bank">
                            reducerBank 실습
                        </MyButton>
                        <MyButton to="/useReducer-attendance">
                            출석부 실습
                        </MyButton>
                        <MyButton to="/custom-hook">custom hook 실습</MyButton>
                    </div>
                    <div className="space">
                        <MyButton to="/useReducer-mission-cart" primary>
                            useReducer 장바구니 미션
                        </MyButton>
                    </div>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <div id="description">
                                버튼을 클릭하면 여기서 실습 내용을 확인할 수
                                있습니다!
                            </div>
                        }
                    />
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
                        path="/custom-hook"
                        element={<UseFetchComponent />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
