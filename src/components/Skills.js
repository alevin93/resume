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
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar
                        title={'Unreal Engine'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'JavaScript'}
                        width={'65%'}
                        text={'65%'}
                    />
                    <ProgressBar
                        title={'Java'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Python'}
                        width={'65%'}
                        text={'65%'}
                    />
                    <ProgressBar
                        title={'React JS'}
                        width={'50%'}
                        text={'50%'}
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
