import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';

const Main = () => {
    return (
        <MainPage>
            <MainHeader />
        </MainPage>
    );
};

const MainPage = styled.main`
    width: 100%;
    min-height: 150vh;
    background: ${({theme})=>theme.mainBackGroundColorWhite};
`;

export default Main;