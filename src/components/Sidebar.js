import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({toggle, fn}) {

    return (
        <SidebarStyled className={`${toggle ? 'nav-toggle' : ''}`} onClick={fn}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-color);
    overflow: hidden;
    transition: all .7s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
`;

export default Sidebar
