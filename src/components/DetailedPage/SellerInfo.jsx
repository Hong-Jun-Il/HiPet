import React, { useState } from 'react';
import styled from 'styled-components';
import ChannelInfo from './ChannelInfo';
import ChannelReview from './ChannelReview';

const SellerInfo = () => {
    const [isSelected, setSelect] = useState(true);
<<<<<<< lhj
=======
    const [rating, setRating] = useState(3.7);
    const [reviews, setReviews] = useState(60);

>>>>>>> main
    return (
        <SellerInfoWrapper>
            <SelectBtns className='wrap'>
                <StyledButton isSelected={isSelected} onClick={() => setSelect(true)}>채널정보</StyledButton>
                <StyledButton isSelected={!isSelected} onClick={() => setSelect(false)}>입양후기</StyledButton>
            </SelectBtns>
<<<<<<< lhj
            {isSelected ? <ChannelInfo /> : <ChannelReview/>}
=======
            {isSelected ? <ChannelInfo isSelected={isSelected} rating={rating} reviews={reviews} /> : <ChannelReview isSelected={isSelected} rating={rating} reviews={reviews} />}
>>>>>>> main
        </SellerInfoWrapper>
    );
};

const SellerInfoWrapper = styled.section`
    width: 100%;
    border-top: 1px solid #CACDD2;
<<<<<<< lhj
`; 

const SelectBtns = styled.div`
    display: flex;
    border: 1px solid red;
=======
`;

const SelectBtns = styled.div`
    display: flex;
>>>>>>> main
`;

const StyledButton = styled.button`
    flex: 1;
    color: #474C52;
    font-size: 24px;
    padding: 34px 0px;
    background: ${({ isSelected }) => isSelected ? "white" : "#F7F8FA"};
`;

export default SellerInfo;
