import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MainItem from './MainItem';
import MainPagination from './MainPagination';

const MainContents = ({coinsData}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(15);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
    const forScroll = useRef(null);

    const handleClick = () =>{
        forScroll.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return (
        <MainContentsSection>
            <span className='line'></span>
            <Container ref={forScroll}>
                <ContentsHeader>
                    <h4>총 {coinsData.length}건</h4>
                    {/* 여기 나중에 수정해야함 */}
                    <span>추천순</span>
                </ContentsHeader>
                <ContentsWrapper>
                    {currentPosts.map((coin, i)=>{
                        return <MainItem key={i} coinName = {coin.name} coinPrice = {coin.current_price} coinImg = {coin.image} />
                    })}
                </ContentsWrapper>
                <MainPagination handleClick = {handleClick} totalPosts={coinsData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            </Container>
        </MainContentsSection>
    );
};

const MainContentsSection = styled.section`
    width: 100%;
    position: relative;

    .line{
        width: 100%;
        height: 1px;
        background-color: #CACDD2;
        position: absolute;
        top: 66px;
    }
`;

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContentsHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme})=>theme.fontDark};
    margin-bottom: 109px;

    h4{
        font-size: 36px;
        font-weight: 600;
    }
    //나중에 정렬 버튼들로 수정해야 하는곳
    span{
        margin-right: 58px;
        font-size: 24px;
        cursor: pointer;
    }
`;

const ContentsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 20px;
    margin-bottom: 229px;
`;

export default MainContents;