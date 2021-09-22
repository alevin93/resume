import React from 'react'
import styled from 'styled-components'


function Button({filter, button}) {
    return (
        <ButtonsStyled>
            {
                button.map((but, i) => {
                    return <ButtonStyled key={i} onClick={() => filter(but)}>
                        {but}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-color-light);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .8rem;
    &:active ,&:focus{
        background-color: var(--white-color);
        color: var(--background-color);
    }
    &:hover{
        background-color: var(--primary-color);
    }
    &:not(:last-child){
        margin-right: .6rem; 
    }

`;
const ButtonsStyled = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2.5rem auto;
`;

export default Button