import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Particle from '../components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="typography">
                <h1>Hi I'm <span>Alex Levin</span></h1>
                <p>Thank you for visiting my resume site.</p>
                <div className="icons">
                    <a href="https://github.com/alevin93" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/alexander-levin-07829a133/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.facebook.com/alexander.levin.98" className="icon i-facebook">
                        <FacebookIcon />
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
