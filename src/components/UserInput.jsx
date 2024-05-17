import React from 'react';
import styled from 'styled-components';

const UserInput = ({ text, type, name, value, onChange }) => {
    return (
        <InputStyle placeholder={text} type={type} name={name} value={value} onChange={onChange} >

        </InputStyle>
    );
};

const InputStyle = styled.input`
  width: 780px;
  height: 40px;
  border: 0.5px solid ${({ theme }) => theme.inputBorder};
  border-radius: 70px;
  font-weight: 400;
  font-size: 2.4rem;
  padding: 39px 45px;
  margin-top: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.inputBorder};
  }
`;

export default UserInput;