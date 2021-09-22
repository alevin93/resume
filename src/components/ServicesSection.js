import React from 'react'
import { InnerLayout } from '../styles/Layouts'
import styled from 'styled-components'
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.svg';
import gamedev from '../img/game-dev.svg'
import intelligence from '../img/intelligence.svg'

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard image={design} 
                                 title={'Web Design'} 
                                 paragraph={'Lorem Ipsum dolor sit amet cons...'} />
                    <div className="mid-card" >
                    <ServiceCard image={intelligence} 
                                 title={'Artificial Intelligence'} 
                                 paragraph={'Lorem Ipsum dolor sit amet cons...'} />
                    </div>
                    <ServiceCard image={gamedev} 
                                 title={'Game Development'} 
                                 paragraph={'Lorem Ipsum dolor sit amet cons...'} />
                
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width: 950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .mid-card{
    }
`;

export default ServicesSection
