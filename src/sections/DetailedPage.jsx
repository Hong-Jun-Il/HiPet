import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';

const DetailedPage = ({coin}) => {
    console.log(coin.name)
    return (
        <DetailedPageWrapper>
            <MainHeader />
            <div className='wrap'>
            </div>
        </DetailedPageWrapper>
    );
};

const DetailedPageWrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    border: 1px solid red;
    background-color: aliceblue;

    .wrap{
        border: 1px solid red;
    }
`

export default DetailedPage;