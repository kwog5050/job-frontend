import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hook';

import { reset } from 'redux/slice/job/jobSearchingSlice';

import Header from 'components/common/Header';
import JobSearch from '../pages/JobSearch';

import * as Style from 'assets/styleComponents/common/common';
import 'assets/css/default.css';

function App() {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(reset());
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
