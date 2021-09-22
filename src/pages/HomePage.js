import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import Particle from '../components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="typography">
                <h1>Hi I am <span>Lorem Ipsum</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="icons">
                    <a href="https://codepen.io/pen" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://codepen.io/pen" className="icon i-github">
                        <GitHubIcon />
                    </a>
                </div>
            </div>
            <Particle />
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            padding-top: 1rem;
            color: var(--dark-gray-color);
            justify-content: center;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #b94af0;
                    color: #b94af0;
                }
            }

            .i-facebook{
                &:hover{
                    border: 2px solid #3b5998;
                    color: #3b5998;
                }
            }
            

        }
    }
`;

export default HomePage
