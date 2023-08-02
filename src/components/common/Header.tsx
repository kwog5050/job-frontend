import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <Head>
            <div className="wrap">
                <div className="flexBox">
                    <h1>
                        <Link to="/">내일자리</Link>
                    </h1>

                    {/* <ul>
                        <li>
                            <Link to="/search/all">검색</Link>
                        </li>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/signup">회원가입</Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </Head>
    );
};

const Head = styled.header`
    padding: 10px 0px;
    background-color: #fff;
    box-shadow: 1px 1px 5px #00000033;
    h1 {
        a {
            font-family: 'OKDDUNG';
            font-size: 40px;
            color: #5200ff66;
        }
    }
    ul {
        display: flex;
        align-items: center;
        gap: 10px;
        li {
            a {
                font-size: 18px;
                font-weight: 500;
                padding: 5px 15px;
            }
        }
    }
`;

export default Header;
