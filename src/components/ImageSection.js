import React from 'react'
import styled from 'styled-components';
import resume from '../img/aboutpage.jpg'
import PrimaryButton from './PrimaryButton';
import resumeB from '../img/ResumeB.pdf'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                    <h4>I am <span>Alex Levin</span></h4>
                <p className="paragraph">
                    I'm recently graduated from college and trying to figure out what to do with the rest of my life.  I have a lot of side projects, some of which are even almost finished.  I am aspiring to be a programmer whether in web developement, data science, or any other field that interests me.  Thank you for visiting my website.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Naitonality</p>
                        <p>Languages</p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Alexander Levin</p>
                        <p>: 29</p>
                        <p>: USA</p>
                        <p>: English, Japanese (learning)</p>
                        <p>: Los Angeles, CA</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} href={resumeB} />
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
