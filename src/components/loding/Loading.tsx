import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <Div>
            <i className="fa-solid fa-spinner"></i>
        </Div>
    );
};

const Div = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    p {
        position: absolute;
        top: calc(50% + 100px);
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        font-size: 24px;
        text-align: center;
        line-height: 1.2;
    }
    i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        font-size: 50px;
        animation-name: loading;
        animation-direction: normal;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }
    @keyframes loading {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;

const Img = styled.img``;

export default Loading;
