import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/HiPetLogo.png";

const MainHeader = () => {
    return (
        <MainHeaderStyle>
            <div className='wrap'>
                <div className='logoWrapper'>
                    <img src={logo} alt="HiPetLogo" />
                </div>
                <ul className='nav'>
                    <li>채팅</li>
                    <li>등록하기</li>
                    <li>마이페이지</li>
                    <li className='profileImgWrapper'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="profile" />
                    </li>
                </ul>
            </div>
        </MainHeaderStyle>
    );
};

const MainHeaderStyle = styled.header`
  position: absolute;
  width: 100%;
  margin-top: 48px;

  .wrap{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logoWrapper{
    cursor: pointer;
    }

  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 170px;
    font-size: 14px;

    li{
        margin-right: 26px;
        color: ${({ theme }) => theme.fontDark};
        cursor: pointer;
    }

    li:last-child{
        margin-right: 0 !important;
    }

    .profileImgWrapper{
        width: 52px;
        height: 52px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.inputBorder};
        overflow: hidden;
    }
  }
  }
`;

export default MainHeader;