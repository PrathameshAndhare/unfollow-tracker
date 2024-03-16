import styled from 'styled-components';

export const CardStyle = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
    margin: 1rem 0;
    border-radius: 10px;
    background-color: lightblue;
    font-size: 15px;
    white-space: normal;
    text-align: center;
    word-wrap: break-word;
    transition: transform 0.2s ease;
    border: 2px solid lightpink; 
    .white {
        background-color: lightblue;
    }
    .whitesmoke {
        background-color: lightcoral;
    }
    p {
        margin: 0.3rem 0;
        font-size: 15px;
        width: 100px;
        word-wrap: break-word;
    }
    
    &:hover {
        transform: scale(1.1); /* Enlarge the card on hover */
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    a img {
        width: 15px;
        height: 15px;
        border-radius: 0;
    }
`;
