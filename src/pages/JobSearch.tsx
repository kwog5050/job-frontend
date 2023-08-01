import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hook';
import { setSearch } from 'redux/slice/job/searchTypeSlice';

import JobSiteType from 'components/jobSearching/JobSiteType';
import JobSearching from 'components/jobSearching/JobSearching';
import { reset } from 'redux/slice/job/jobSearchingSlice';

const JobSearch = () => {
    const { searchTpye } = useParams();
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const jobSearchType = useAppSelector((state) => state.searchType.searchType);

    useEffect(() => {
        dispatch(setSearch(searchTpye));
    }, [nav]);

    useEffect(() => {
        dispatch(reset());
    }, [jobSearchType]);

    return (
        <>
            <JobSiteType></JobSiteType>
            <JobSearching></JobSearching>
        </>
    );
};

export default JobSearch;
