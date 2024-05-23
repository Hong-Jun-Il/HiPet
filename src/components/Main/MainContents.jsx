import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MainItem from './MainItem';
import MainPagination from './MainPagination';
import EmptyDataPage from './EmptyDataPage';

const MainContents = ({ coinsData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(15);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);


    return (
        <MainContentsSection>
            <Container>
                <ContentsHeader>
                    <h4>총 {coinsData.length}건</h4>
                    {/* 나중에 수정해야함 */}
                    <span>추천순</span>
                </ContentsHeader>
                {coinsData.length > 0 ? (
                    <ContentsWrapper>
                        {currentPosts.map((coin, i) => {
                            return <MainItem key={i} coin={coin} />;
                        })}
                        <MainPagination currentPage={currentPage} totalPosts={coinsData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                    </ContentsWrapper>
                ) : (
                    <EmptyDataPage />
                )}
            </Container>
        </MainContentsSection>
    );
};

const MainContentsSection = styled.section`
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;
`;

const ContentsHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.fontDark};

    h4 {
        font-size: 36px;
        font-weight: 600;
    }

    span {
        margin-right: 58px;
        font-size: 24px;
        cursor: pointer;
    }
`;

const ContentsWrapper = styled.div`
    margin-top: 109px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 20px;
    margin-bottom: 229px;
    width: 100%;
`;

export default MainContents;
