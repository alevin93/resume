import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationIcon from '@material-ui/icons/PersonPinCircle';
import ContactItem from '../components/ContactItem';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationIcon />
    return (
        <MainLayout>
            <ContactPageStyled>
                <Title title={'Contact Me'} span={'Contact Me'} />
                <InnerLayout className={'contact-section'}>
                    <div className={"left-content"}>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name" id="name">Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="name" id="name">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="name" id="name">Subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Message</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <div className="form-field f-button">
                                    <PrimaryButton title={'Submit'} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={"right-content"}>
                        <ContactItem 
                            icon={phone} 
                            title={'Phone'}
                            contact1={'(818) 205-7129'}
                        />
                        <ContactItem 
                            icon={email} 
                            title={'Email'}
                            contact1={'alex.levin93@gmail.com'}
                        />
                        <ContactItem 
                            icon={location} 
                            title={'Location'}
                            contact1={'Los Angeles'}
                        />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>

    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 1200px){
        grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            color: var(--dark-gray-color);
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 560px){
                width: 100%;
            }
            .form-field{
                &:not(:first-child){
                    margin-top: 2rem;
                }
                position: relative;
                width: 100%;
                label{
                    color: var(--dark-gray-color);
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-color);
                    padding: 0rem .5rem;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0rem 15px;
                    width: 100%;
                    color: var(--white-color);
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: var(--white-color);
                    width: 100%;
                    padding: 1.5rem 1rem;
                    margin-bottom: 1rem;
                }
            }
        }
        .f-button{
            margin-bottom: 2rem;
        }
    }
`;

export default ContactPage