import React from 'react'
import styled from 'styled-components'

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title}<span>{span}</span></h2>
        </TitleStyled>
    )
}


const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--gray-color);
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .5rem;
        @media screen and (max-width:620px){
            font-size: 2.8rem;
        }
        @media screen and (max-width:370px){
                font-size: 2rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--border-color);
            border-radius: 15;
            left: 0
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 2.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15;
            left: 0;
        }
        span{
            font-weight: 900;
            font-size: 5rem;
            color: rgba(25, 29, 43, .44);
            position: absolute;
            left: 0;
            top: 10%;
            z-index: -1;
            @media screen and (max-width:620px){
                font-size: 4rem;
            }
            @media screen and (max-width:496px){
                font-size: 3rem;
            }
            @media screen and (max-width:370px){
                font-size: 2rem;
            }
        }
    }
`;

export default Title
