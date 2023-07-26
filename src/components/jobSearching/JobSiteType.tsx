import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const JobSiteType = () => {
    const nav = useNavigate();
    const location = useLocation();
    const [urlNumber, setUrlNumber] = useState(0);

    const urlCheck = () => {
        if (location.pathname === '/') {
            setUrlNumber(0);
        } else if (location.pathname === '/saramin') {
            setUrlNumber(1);
        } else if (location.pathname === '/jabkorea') {
            setUrlNumber(2);
        }
    };

    useEffect(() => {
        urlCheck();
    }, [nav]);

    return (
        <Ul>
            <li className={urlNumber === 0 ? 'on' : ''}>
                <Link to="/">통합검색</Link>
            </li>
            <li className={urlNumber === 1 ? 'on' : ''}>
                <Link to="/saramin">사람인</Link>
            </li>
            <li className={urlNumber === 2 ? 'on' : ''}>
                <Link to="/jabkorea">잡코리아</Link>
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
        background-color: #19dc0c;
        a {
            color: #fff;
        }
    }
`;

export default JobSiteType;
