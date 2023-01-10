import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import styled from 'styled-components'

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <h2>HTML/CSS</h2>
                    <h4>JavaScript</h4>
                    <h2>Python</h2>
                    <h4>Node & React</h4>
                    <h2>SQL & NoSQL</h2>
                    <h4>Java</h4>
                    <h2>REST API</h2>
                    <h4>Linux/BASH</h4>
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
