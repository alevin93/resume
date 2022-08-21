import React, {useRef} from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationIcon from '@material-ui/icons/PersonPinCircle';
import ContactItem from '../components/ContactItem';
import emailjs from 'emailjs-com'


function ContactPage() {

    const form = useRef();

    function sendEmail(e) {
        console.log("sendEmail has been run")
        e.preventDefault();

        emailjs.sendForm('service_1iu5gql', 'template_ootomig', e.target, 'ZXiv-dhXWENopmWoM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        alert("Message has been sent!");
    }



    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationIcon />

    return (
        <MainLayout>
            <ContactPageStyled>
                <Title title={'Contact Me'} span={'Contact Me'} />
                <InnerLayout className={'contact-section'}>
                    <div className={"left-content"}>
                        <form className="form" ref={form} onSubmit={sendEmail}>
                            <div className="form-field">
                                <label htmlFor="name" id="name">Name</label>
                                <input type="text" id="name" name="name"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="name" id="name">Email</label>
                                <input type="email" id="email" name="email"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="name" id="name">Subject</label>
                                <input type="text" id="subject" name="subject"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Message</label>
                                <textarea name="message" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <button className="unique-button">
                                    <PrimaryButton title={'Submit'} type="submit" value="Send"/>
                                </button>
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

    .unique-button{
        margin-bottom: 2rem;
        justify-content: center;
    }

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
    }

    
`;

export default ContactPage