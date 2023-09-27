import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Courses from './components/Course';
import Students from './components/Students';
import Teachers from './components/Teachers';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./styles/styles.css";





function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <div>
                        <div className='navbar'>
                            <ul className="ull">
                                <li className="linkli"><Link to="/first" className='link'>لیست دروس</Link></li>
                                <li className="linkli"><Link to="/second" className='link'>لیست اساتید</Link></li>
                                <li className="linkli"><Link to="/third" className='link'>لیست دانشجویان</Link></li>
                            </ul>
                        </div>
                        <Routes>
                            <Route path="/first" component={Courses} element={<Courses />} />
                            <Route path="/second" component={Teachers} element={<Teachers />} />
                            <Route path="/third" component={Students} element={<Students />} />
                        </Routes>

                    </div>
                </Router>
            </Provider>

        </>
    );
}

export default App;
