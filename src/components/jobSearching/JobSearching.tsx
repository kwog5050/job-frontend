import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { JobData } from 'interfaces/job';

import { useAppDispatch, useAppSelector } from 'redux/hook';
import {
    getAllJobList,
    getJobkoreaJobList,
    getSaraminJobList,
    jobSearchSelector,
} from 'redux/slice/job/jobSearchingSlice';

import Loading from 'components/loding/Loading';

import { styled } from 'styled-components';

const JobSearching = () => {
    const nav = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [jobList, setJobList] = useState<JobData[] | undefined>(undefined);
    const [pagination, setPagination] = useState<number[]>([]);
    const jobSearchType = useAppSelector((state) => state.searchType.searchType);
    const selectedJobSearch = useAppSelector(jobSearchSelector);
    const dispatch = useAppDispatch();

    const onKeyPressEnter = (e: any) => {
        if (e.code === 'Enter') {
            searching();
        }
    };

    const searching = () => {
        const keywordQuery = searchParams.get('keyword') === null ? keyword : searchParams.get('keyword');
        const pageQuery = searchParams.get('page') === null ? 1 : searchParams.get('page');

        if (searchParams.get('keyword') === null) {
            nav(`?keyword=${keywordQuery}&page=${pageQuery}`);
        } else if (searchParams.get('keyword') !== keyword) {
            nav(`?keyword=${keyword}&page=1`);
        }

        switch (jobSearchType) {
            case 'all':
                dispatch(getAllJobList({ keyword: keywordQuery, page: pageQuery }));
                break;
            case 'saramin':
                dispatch(getSaraminJobList({ keyword: keywordQuery, page: pageQuery }));
                break;
            case 'jobkorea':
                dispatch(getJobkoreaJobList({ keyword: keywordQuery, page: pageQuery }));
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        setIsLoading(selectedJobSearch.isLoading);
        setError(selectedJobSearch.error);
        setJobList(selectedJobSearch.crawlingData?.searchList);
        setPagination(selectedJobSearch.crawlingData?.pagination);
    }, [selectedJobSearch]);

    useEffect(() => {
        if (searchParams.get('keyword') !== null) {
            searching();
        }
    }, [searchParams.get('page')]);

    useEffect(() => {
        setKeyword('');
    }, [jobSearchType]);

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
                    onKeyPress={onKeyPressEnter}
                />
                <div className="searchButton" onClick={searching}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className="detailOption"></div>

            {isLoading ? (
                <Loading />
            ) : (
                <>
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
                                                <h2>
                                                    {a.title.length < 50 ? a.title : a.title.substring(0, 50) + '...'}
                                                </h2>
                                                <div className="detailInfo">
                                                    {a.detailOption.academic !== '' && (
                                                        <h5>{a.detailOption.academic}</h5>
                                                    )}
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

                    <div className="page">
                        <Link
                            to={`?keyword=${searchParams.get('keyword')}&page=${Number(searchParams.get('page')) - 1}`}>
                            <i className="fa-solid fa-angle-left"></i>
                        </Link>
                        {pagination.map((a: any) => {
                            return (
                                <Link
                                    style={Number(searchParams.get('page')) === a ? { color: '#5200ff66' } : {}}
                                    to={`?keyword=${searchParams.get('keyword')}&page=${a}`}>
                                    {a}
                                </Link>
                            );
                        })}
                        <Link
                            to={`?keyword=${searchParams.get('keyword')}&page=${Number(searchParams.get('page')) + 1}`}>
                            <i className="fa-solid fa-angle-right"></i>
                        </Link>
                    </div>
                </>
            )}
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

    .page {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
        a,
        i {
            font-size: 16px;
            font-weight: bold;
        }
    }
`;

export default JobSearching;
