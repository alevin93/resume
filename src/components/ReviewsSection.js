import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ReviewItem from './ReviewItem';
//import { InnerLayout } from '../styles/Layouts'
import Title from './Title';

function ReviewsSection() {
    return (
        <ReviewsSectionStyled>
                <Title title={'Reviews'} span={'Reviews'} />
                <InnerLayout>
                    <div className="reviews">
                        <h4>No current reviews</h4>
                    </div>
                </InnerLayout>
        </ReviewsSectionStyled>
    )
}

const ReviewsSectionStyled = styled.div`
    .reviews{
        display: grid;
        grid-gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        @media screen and (max-width: 650px){    
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSection
