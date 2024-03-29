import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/mainportfolio.jpg';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact >About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact >Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact >Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact >Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 My Portfolio Website</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border-color);

    .avatar{
        width: 80%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 2rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);

        }
    }

    
    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color);
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 25%;
                    background-color: var(--gray-color);
                    transition: All 0.2s cubic-bezier(1, -0.2, 0.25, 0.95);
                    z-index: -1;
                    opacity: 0.15;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    .footer{
        border-top: 1px solid var(--border-color);
        width: 90%;
        p{
            padding: 1rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
            color: var(--dark-gray-color);
        }         
    }
`;

export default Navigation
