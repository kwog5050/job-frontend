import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'redux/hook';
import { setSearch } from 'redux/slice/job/searchTypeSlice';

import JobSiteType from 'components/jobSearching/JobSiteType';
import JobSearching from 'components/jobSearching/JobSearching';

const JobSearch = () => {
    const { searchTpye } = useParams();
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setSearch(searchTpye));
    }, [nav]);
    return (
        <>
            <JobSiteType></JobSiteType>
            <JobSearching></JobSearching>
        </>
    );
};

export default JobSearch;
