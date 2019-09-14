import React from 'react';
import StyledWrapper from './style';
import { Button } from 'antd';


const PersonCard = props => {
    const imgUrl = `https://picsum.photos/300/30${Math.floor(Math.random() * 10)}`;
    return (
        <StyledWrapper>
            <div className='img-container'>
                <div className='border'>
                    <img src={imgUrl} />
                </div>
            </div>
            <div className='content-container'>
                <div>Tanakorn Karode</div>
                <div>(Tourist)</div>
                <div>5/5</div>
                <Button size='small'>View</Button>
            </div>
        </StyledWrapper>
    )
}

export default PersonCard;