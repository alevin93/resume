import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import styled from 'styled-components'
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'Unity'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar
                        title={'JavaScript'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar
                        title={'Java'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Python'}
                        width={'95%'}
                        text={'95%'}
                    />
                    <ProgressBar
                        title={'React JS'}
                        width={'75%'}
                        text={'75%'}
                     />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        color: var(--white-color);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills
