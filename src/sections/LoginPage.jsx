import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import LoginPageHeader from '../components/LoginPage/LoginPageHeader';
import SignUpAndSignIn from '../components/LoginPage/SignUpAndSignIn';
import SignIn from '../components/LoginPage/SignIn';
import SignUp from '../components/LoginPage/SignUp';

const LoginPage = () => {

    return (
        <LoginPageWrapper>
        <LoginPageHeader />
        <SignUpAndSignIn />
        <LoginSection>
            <Routes>
                <Route path='/' element={<SignUp />} />
                <Route path='/signIn' element={<SignIn />} />
            </Routes>
        </LoginSection>
        </LoginPageWrapper>
    );
};

const LoginPageWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginSection = styled.form`
    position: absolute;
    top: 56.5%;
    left: 50%;
    transform: translate3d(-50%,-50%, 0);
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 308px;
`;

export default LoginPage;