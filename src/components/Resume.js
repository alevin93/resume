import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import Title from './Title';
import Work from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <Work />
    const school = <SchoolIcon />
    return (
         <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2017 - 2022'} 
                        title={'California State University, Northridge'}
                        subTitle={'B.S. of Computer Science'}
                        text={'Programming, data structures, algorithms, project management including agile and other development strategies. Please see the bottom right for known programming languages and skill level. '}
                    />
                </div>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2012 - 2020'} 
                        title={'Junior Account Manager'}
                        subTitle={'Armanino, LLP / RBZ, LLP'}
                        text={'Managed client affairs including paying their bills, reconciling bank accounts, made calls to vendors on behalf of clients'}
                    />
                    <ResumeItem 
                        year={'2020 - Current'} 
                        title={'Technician / Manager'}
                        subTitle={'Asurion Tech Repair'}
                        text={'Repair phones, computers, and game consoles. Quickly moved into management, ordering stock, making employee schedules, tending to customer concerns '}
                    />
                    <ResumeItem 
                        year={'2022 - Current'} 
                        title={'Intern Programmer'}
                        subTitle={'Lifeshack.com'}
                        text={'Build web application components, find and fix bugs, and design interface '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
        margin-bottom: 4rem;
    }
`;

export default Resume


