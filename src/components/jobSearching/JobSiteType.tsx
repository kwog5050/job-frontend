import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useAppSelector } from 'redux/hook';

const JobSiteType = () => {
    const jobSearchType = useAppSelector((state) => state.searchType.searchType);

    return (
        <Ul>
            <li className={jobSearchType === 'all' ? 'on' : ''}>
                <Link to="/search/all">통합검색</Link>
            </li>
            <li className={jobSearchType === 'saramin' ? 'on' : ''}>
                <Link to="/search/saramin">사람인</Link>
            </li>
            <li className={jobSearchType === 'jobkorea' ? 'on' : ''}>
                <Link to="/search/jobkorea">잡코리아</Link>
            </li>
        </Ul>
    );
};

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
    li {
        flex: 1;
        &:not(:last-child) {
            border-right: 1px solid #eee;
        }
        a {
            width: 100%;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
            padding: 17px 0px 10px;
        }
    }
    li.on {
        background-color: #5200ff66;
        a {
            color: #fff;
        }
    }
`;

export default JobSiteType;
