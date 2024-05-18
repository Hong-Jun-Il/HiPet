import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';

const Test = () => {
    const [id, onChangeId, setId] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");

    const onReset = useCallback(() => {
        setId("");
        setPw("");
    }, [setId, setPw]);

    const onLogin = () => {
        if (!id || !pw) {
            alert("모든 값을 정확하게 입력해주세요");
            return;
        }

        alert("로그인");
        onReset();
    };

    return (
        <div>
            <input type="text" value={id} onChange={onChangeId} />
            <input type="text" value={pw} onChange={onChangePw} />
            <button onClick={onLogin}>로그인하기</button>
        </div>
    );
};

export default Test;