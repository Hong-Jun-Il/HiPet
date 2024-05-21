import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import { useLocation } from 'react-router-dom';
import ProductInfo from '../components/DetailedPage/ProductInfo';
import SellerInfo from '../components/DetailedPage/SellerInfo';

const DetailedPage = () => {
    const location = useLocation();
    const { coin } = location.state || {}; //이게 코인 데이터임
    
    return (
        <DetailedPageWrapper>
            <MainHeader />
            <ProductInfo data={coin} />
            <SellerInfo />
        </DetailedPageWrapper>
    );
};

const DetailedPageWrapper = styled.main`
    min-height: 100vh;
    
    .wrap{
        position: relative;
        top: 158px;
        margin: 0 auto;
        max-width: 1180px;
    }
`;

export default DetailedPage;