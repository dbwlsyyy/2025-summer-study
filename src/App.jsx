import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UseEffectUserList from './week1-js-react/UseEffectUserList';
import UseEffectTimer from './week1-js-react/UseEffectTimer';
import UseEffectMouse from './week1-js-react/UseEffectMouse';

function App() {
    return (
        <Router>
            <div style={{ padding: 20 }}>
                <h1>React Practice Lab</h1>

                <nav style={{ marginBottom: 40 }}>
                    <button style={{ marginRight: 10 }}>
                        <Link to="/timer">timer 실습</Link>
                    </button>
                    <button style={{ marginRight: 10 }}>
                        <Link to="/userList">userList 실습</Link>
                    </button>
                    <button style={{ marginRight: 10 }}>
                        <Link to="/mouseTracker">mouseTracker 실습</Link>
                    </button>
                </nav>

                <Routes>
                    <Route path="/timer" element={<UseEffectTimer />} />
                    <Route path="/userList" element={<UseEffectUserList />} />
                    <Route path="/mouseTracker" element={<UseEffectMouse />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
