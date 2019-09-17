import React from 'react';
import StyledWrapper from './style';
import ReviewModal from '../ReviewModal';

const PersonCard = props => {
    const imgUrl = `https://picsum.photos/300/30${Math.floor(Math.random() * 10)}`;
    let score = props.reviews.reduce((prev, cur, index) => prev + parseInt(cur.score), 0);
    const numReview = props.reviews.length;
    if (numReview > 0)
        score = score / numReview;
    return (
        <StyledWrapper>
            <div className='img-container'>
                <div className='border'>
                    <img src={imgUrl} />
                </div>
            </div>
            <div className='content-container'>
                <div>{props.name}</div>
                <div>(Tourist)</div>
                <div>{score}/5</div>
                <ReviewModal name={props.name} reviews={props.reviews} />
            </div>
        </StyledWrapper>
    )
}

export default PersonCard;