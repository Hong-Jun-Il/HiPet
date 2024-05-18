import React, { useState } from 'react';
import UserInput from './UserInput';
import LoginPageButton from './LoginPageButton';
import useInput from '../hooks/useInput';

const SignUp = () => {  
    const [username, onChangeUsername, setUsername] = useInput("");
    const [id, onChangeId, setId] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");
    
    return (
        <>
            <UserInput text="이름을 입력해주세요" type="text" name="username" value={username} onChange={onChangeUsername} />
            <UserInput text="아이디를 입력해주세요" type="text" name="id" value={id} onChange={onChangeId} />
            <UserInput text="비밀번호를 입력해주세요" type="password" name="pw" value={pw} onChange={onChangePw} />
            <LoginPageButton text={"가입하기"} />
        </>
    );
};

export default SignUp;