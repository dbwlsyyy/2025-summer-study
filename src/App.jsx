import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UseEffectUserList from './week1-js-react/useEffect/UseEffectUserList';
import UseEffectTimer from './week1-js-react/useEffect/UseEffectTimer';
import UseEffectMouse from './week1-js-react/useEffect/UseEffectMouse';
import Calculate from './week1-js-react/useMemo/Calculate';
import RenderBox from './week1-js-react/useCallback/RenderBox';

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
                </nav>

                <Routes>
                    <Route path="/timer" element={<UseEffectTimer />} />
                    <Route path="/userList" element={<UseEffectUserList />} />
                    <Route path="/mouseTracker" element={<UseEffectMouse />} />
                    <Route path="/calculate" element={<Calculate />} />
                    <Route path="/renderBox" element={<RenderBox />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
