import React from 'react'
import styled from 'styled-components';
import resume from '../img/megumin.jpg'
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                    <h4>I am <span>AN ARTIST</span></h4>
                <p className="paragraph">
                    What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Naitonality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Megumin</p>
                        <p>: 15</p>
                        <p>: Crimson Demon</p>
                        <p>: Common</p>
                        <p>: Axel City</p>
                        <p>: Explosions</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        padding-right: 1rem;
        width: 100%;
        img{
            border: 10px solid var(--border-color);
            
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        padding-left: 1rem;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;

            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
            padding-bottom: 1.4rem;
        }
    }
`;

export default ImageSection
