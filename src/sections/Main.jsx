import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import MainBanner from '../components/Main/MainBanner';
import MainSearch from '../components/Main/MainSearch';
import MainContents from '../components/Main/MainContents';

const Main = () => {
    return (
        <MainPage>
            <MainHeader />
            <MainBanner />
            <MainSearch />
            <MainContents />
        </MainPage>
    );
};

const MainPage = styled.main`
    width: 100%;
    min-height: 150vh;
    background: ${({theme})=>theme.basicWhite};
    display: flex;
    flex-direction: column;
`;

export default Main;