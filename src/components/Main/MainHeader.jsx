import React from 'react';
import styled from 'styled-components';

const MainHeader = () => {
    return (
        <MainHeaderStyle>
            Test
        </MainHeaderStyle>
    );
};

const MainHeaderStyle = styled.header`
  position: absolute;
  display: flex;
  width: 100%;
  border: 1px solid red;
`;

export default MainHeader;