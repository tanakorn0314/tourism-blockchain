import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: inline-block;
    background-color: #FFDF00;
    border: 1px solid #cecece;
    border-radius: 10px 10px 100px 100px;
    padding: 10px;

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        .border {
            width: 110px;
            height: 110px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #DDD;
            border-radius: 50%;
            img {
                width: 100px;
                height: 100px;
                border-radius: 50px;
            }
        }
    }

    .content-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export default StyledWrapper;