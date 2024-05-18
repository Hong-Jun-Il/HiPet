import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const UserInput = ({ text, type, name, value, onChange }) => {
  const usernameRegex = /^[a-zA-Z가-힣]{2,}$/;
  const idRegex = /^[a-zA-Z]{2,}[a-zA-Z0-9]*$/;
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  const [isValid, setIsValue] = useState({
    usernameIsValid: false,
    idIsValid: false,
    pwIsValid: false
  })

  const validateRegex = (regex, value) => {
    return regex.test(value);
  };

  const getMessage = (name, value) => {
    switch (name) {
      case "username":
        if(validateRegex(usernameRegex, value)){
          
        }
      case "id":
        return !validateRegex(idRegex, value) ? "올바른 아이디를 입력하세요." : null;
      case "pw":
        return !validateRegex(pwRegex, value) ? "올바른 비밀번호를 입력하세요." : null;
      default:
        return null;
    }
  };

  return (
    <InputWrapper>
      <InputStyle
        placeholder={text}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div>
        <Message isInputted={value.length >= 1} name={name}>
          {value.length >= 1 && getMessage(name, value)}
        </Message>
      </div>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
    width: 780px;
    margin-bottom: 20px;
    div {
        position: relative;
    }
`;

const InputStyle = styled.input`
    width: 100%;
    height: 40px;
    border: 0.5px solid ${({ theme }) => theme.inputBorder};
    border-radius: 70px;
    font-weight: 400;
    font-size: 2.4rem;
    padding: 39px 45px;
    &::placeholder {
        color: ${({ theme }) => theme.inputBorder};
    }
`;

const Message = styled.p`
    position: absolute;
    top: 5px;
    left: 20px;
    opacity: 0;
    ${props =>
    props.isInputted &&
    css`
            opacity: 1;
            color: ${({theme})=>theme.fontRed};
        `}
`;

export default UserInput;
