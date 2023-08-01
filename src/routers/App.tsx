import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/common/Header';
import JobSearch from '../pages/JobSearch';

import * as Style from 'assets/styleComponents/common/common';
import 'assets/css/default.css';

function App() {
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
