import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'redux/hook';
import {
    getAllJobList,
    getJobkoreaJobList,
    getSaraminJobList,
    jobSearchSelector,
} from 'redux/slice/job/jobSearchingSlice';

import { JobData } from 'interfaces/job';

import { styled } from 'styled-components';
import Loading from 'components/loding/Loading';

const JobSearching = () => {
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [jobList, setJobList] = useState<JobData[] | undefined>(undefined);
    const jobSearchType = useAppSelector((state) => state.searchType.searchType);
    const selectedJobSearch = useAppSelector(jobSearchSelector);
    const dispatch = useAppDispatch();

    const searching = () => {
        switch (jobSearchType) {
            case 'all':
                dispatch(getAllJobList({ keyword: keyword }));
                break;
            case 'saramin':
                dispatch(getSaraminJobList({ keyword: keyword }));
                break;
            case 'jobkorea':
                dispatch(getJobkoreaJobList({ keyword: keyword }));
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        setIsLoading(selectedJobSearch.isLoading);
        setError(selectedJobSearch.error);
        setJobList(selectedJobSearch.searchingList);
    }, [selectedJobSearch]);

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
                <div className="searchButton" onClick={searching}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className="detailOption"></div>
            {isLoading && <Loading />}
            {error && <div>error : {error}</div>}
            <ul>
                {jobList !== undefined && jobList?.length <= 0 ? (
                    <p style={{ textAlign: 'center', padding: '100px 0px' }}>검색된 결과가 없습니다.</p>
                ) : (
                    jobList?.map((a: JobData, i: number) => {
                        return (
                            <li key={i} style={{ borderBottom: '1px solid #aaa' }}>
                                <a target="_blank" href={a.href}>
                                    <div className="content">
                                        <h1>{a.siteName}</h1>
                                        <h2>{a.title.length < 50 ? a.title : a.title.substring(0, 50) + '...'}</h2>
                                        <div className="detailInfo">
                                            {a.detailOption.academic !== '' && <h5>{a.detailOption.academic}</h5>}
                                            <h5>{a.detailOption.area}</h5>
                                            <h5>{a.detailOption.career}</h5>
                                            <h5>{a.detailOption.typeOfEmployment}</h5>
                                            <h5>{a.day}</h5>
                                        </div>
                                        <div className="sectors">
                                            {a.sector.map((b: string, j: number) => {
                                                return (
                                                    b !== '' && (
                                                        <h5 key={j}>
                                                            {b}
                                                            {a.sector.length !== j + 1 ? (
                                                                <span>,</span>
                                                            ) : (
                                                                <span> 외</span>
                                                            )}
                                                        </h5>
                                                    )
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="companyName">{a.companyName}</div>
                                </a>
                            </li>
                        );
                    })
                )}
            </ul>
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
            border: 1px solid #5200ff66;
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
            border-left: 1px solid #5200ff66;
            cursor: pointer;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        li {
            a {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 10px;
                .content {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    h1 {
                        color: #5200ff66;
                        font-weight: bold;
                    }
                    h2 {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .detailInfo {
                        display: flex;
                        gap: 10px;
                    }
                    .sectors {
                        display: flex;
                        font-weight: 300;
                        color: #aaa;
                        span {
                            padding-right: 5px;
                        }
                    }
                }
                .companyName {
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }
    }
`;

export default JobSearching;
