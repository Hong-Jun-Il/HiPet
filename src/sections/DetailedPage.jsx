import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import { useLocation } from 'react-router-dom';
import detailedPageVector from "../assets/detailedPageVector.png"

const DetailedPage = () => {
    const location = useLocation();
    const { coin } = location.state || {}; //이게 코인 데이터임
    
    console.log(coin)
    return (
        <DetailedPageWrapper>
            <MainHeader />
            <div className="wrap">
                <div className="tags">
                    <span>포유류</span>
                    <div className="imgWrapper">
                        <img src={detailedPageVector} alt="" />
                    </div>
                    <span>개</span>
                    <div className="imgWrapper">
                        <img src={detailedPageVector} alt="" />
                    </div>
                    <span>말티즈</span>
                </div>
            </div>
        </DetailedPageWrapper>
    );
};

const DetailedPageWrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: aliceblue;

    .wrap{
        font-size: 24px;
        
        .tags{
            display: flex;
            margin-top: 158px   ;

            .imgWrapper{
            width: 6px;
            height: 12px;
            margin-left: 14px;
            margin-right: 17px;
        }
        }
    }
`;

export default DetailedPage;