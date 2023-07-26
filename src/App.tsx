import React from 'react';

import Header from 'components/common/Header';
import JobSiteType from 'components/jobSearching/JobSiteType';
import JobSearching from 'components/jobSearching/JobSearching';

import * as Style from 'assets/styleComponents/common/common';
import 'assets/css/default.css';

function App() {
    return (
        <>
            <Header />
            <Style.Container>
                <JobSiteType></JobSiteType>
                <JobSearching></JobSearching>
            </Style.Container>
        </>
    );
}

export default App;
