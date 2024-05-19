import React from 'react';
import styled from 'styled-components';

const MainItem = ({text}) => {
    return (
        <MainItemWrapper>
            {text}
        </MainItemWrapper>
    );
};

const MainItemWrapper = styled.li`
    border: 1px solid green;
    width: 380px;
    height: 520px;
`;

export default MainItem;