import React, { useState } from 'react';
import UserInput from './UserInput';
import LoginPageButton from './LoginPageButton';

const SignIn = () => {
    const [input, setInput] = useState({
        id: "",
        pw: ""
    })
    const {id, pw} = input;

    function onChange(e){
        const {name, value} = e.target;
        
        setInput({
            ...input,
            [name]: value
        })

        console.log(id);
        console.log(pw);
    }
    
    return (
    <>
        <UserInput text="아이디를 입력해주세요" type="text" name="id" value={id} onChange={onChange} />
        <UserInput text="비밀번호를 입력해주세요" type="password" name="pw" value={pw} onChange={onChange} />
        <LoginPageButton text={"로그인하기"} />
    </>
    );
};

export default SignIn;