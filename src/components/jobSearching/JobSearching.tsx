import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'redux/hook';

import { JobData } from 'interfaces/job';

import { styled } from 'styled-components';
import { getJobList, searchSelector } from 'redux/slice/jobSearchingSlice';

const JobSearching = () => {
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [jobList, setJobList] = useState<JobData[]>();
    const selectedSearch = useAppSelector(searchSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsLoading(selectedSearch.isLoading);
        setError(selectedSearch.error);
        setJobList(selectedSearch.searchingList);
    }, [selectedSearch]);

    const onChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'keyword':
                setKeyword(value);
                break;

            default:
                break;
        }
    };

    return (
        <Search>
            <div className="box">
                <input
                    type="text"
                    name="keyword"
                    placeholder="검색어를 입력해주세요"
                    value={keyword}
                    onChange={onChange}
                />
                <div
                    className="searchButton"
                    onClick={(e: any) => {
                        e.preventDefault();
                        dispatch(getJobList({ keyword: keyword }));
                    }}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className="detailOption"></div>
            {isLoading && <div>검색중...</div>}
            {error && <div>error : {error}</div>}
            {jobList?.map((a: any, i: any) => {
                return (
                    <div style={{ borderBottom: '1px solid #aaa' }}>
                        <div>{a.title}</div>
                        <div>{a.companyName}</div>
                        <div>{a.detailOption.academic}</div>
                        <div>{a.detailOption.area}</div>
                        <div>{a.detailOption.career}</div>
                        <div>{a.detailOption.typeOfEmployment}</div>
                    </div>
                );
            })}
        </Search>
    );
};

const Search = styled.div`
    margin-top: 10px;
    .box {
        position: relative;
        input {
            width: 100%;
            padding: 10px 5px;
            font-size: 16px;
            border: 1px solid #19dc0c;
        }
        .searchButton {
            position: absolute;
            top: 0px;
            right: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 50px;
            height: 42.8px;
            border-left: 1px solid #19dc0c;
            cursor: pointer;
        }
    }
`;

export default JobSearching;
