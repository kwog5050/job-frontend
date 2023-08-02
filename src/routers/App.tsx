import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Header from 'components/common/Header';
import JobSearch from '../pages/JobSearch';

import * as Style from 'assets/styleComponents/common/common';
import 'assets/css/default.css';

function App() {
    const nav = useNavigate();
    const loaction = useLocation();
    useEffect(() => {
        if (loaction.pathname === '/') {
            nav('/search/all');
        }
    }, [nav]);
    return (
        <>
            <Header />
            <Style.Container>
                <Routes>
                    <Route path="/search/:searchTpye" element={<JobSearch />} />
                </Routes>
            </Style.Container>
        </>
    );
}

export default App;
