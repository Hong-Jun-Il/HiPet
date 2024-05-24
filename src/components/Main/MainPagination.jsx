import React from 'react';
import styled from 'styled-components';

const MainPagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <Pagination>
            {pages.map((e, i) => {
                return (
                    <button key={i} onClick={() => setCurrentPage(e)}>
                        {e}
                    </button>
                );
            })}
        </Pagination>
    );
};

const Pagination = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: -.5%;
    button {
        cursor: pointer;
        padding: 10px;
        background: transparent;
        font-size: 36px;
    }
    margin-bottom: 91px;
`;

export default MainPagination;
