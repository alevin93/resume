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
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Master of Explosions'}
                        subTitle={'Kazuma Party'}
                        text={'What the fuck did you just say about me you little bitch ill have you know i graduated t'}
                    />
                    <ResumeItem 
                        year={'2012-2015'} 
                        title={'Gay Boy'}
                        subTitle={'Kazuma Party'}
                        text={'What the fuck did you just say about me you little bitch ill have you know i graduated t'}
                    />
                    <ResumeItem 
                        year={'2000-2011'} 
                        title={'Crushing It'}
                        subTitle={'Kazuma Party'}
                        text={'What the fuck did you just say about me you little bitch ill have you know i graduated t'}
                    />
                </div>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Master of Explosions'}
                        subTitle={'Kazuma Party'}
                        text={'What the fuck did you just say about me you little bitch ill have you know i graduated t'}
                    />
                    <ResumeItem 
                        year={'2012-2015'} 
                        title={'Gay Boy'}
                        subTitle={'Kazuma Party'}
                        text={'What the fuck did you just say about me you little bitch ill have you know i graduated t'}
                    />
                    <ResumeItem 
                        year={'2000-2011'} 
                        title={'Crushing It'}
                        subTitle={'Kazuma Party'}
                        text={'What the fuck did you just say about me you little bitch ill have you know i graduated t'}
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


