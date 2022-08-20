import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
:root{
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #10121a;
    --background-color-2: #191d2b;
    --background-color-light: rgba(3,127,255,.3);
    --background-gray: #2e344e;
    --border-color: #2e344e;
    --white-color: #fff;
    --font-color: #313131;
    --font-color-2: #151515;
    --sidebar-color: #191d2b;
    --gray-color: #d3d3d3;
    --dark-gray-color: #a9a9a9;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
    
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body{
        background-color: var(--background-color);
        color: var(--font-color);
    }

    body::-webkit-scrollbar{
        width: 9px;
        background-color: #383838;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #6b6b6b;
    }
    body::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #383838;
    }

    a{
        font-family: inherit;
        font-size: inherit;
        font-size: 1rem;
        color: var(--gray-color);
    }

    h4{
        color: var(--white-color);
    }

    p{
        color: var(--gray-color);
    }

    h1{
        font-size: 4rem;
        color: var(--gray-color);
        span{
            font-size: 4rem;
            @media screen and (max-width: 502px){
                font-size: 2rem;
            }
        }
        @media screen and (max-width: 502px){
            font-size: 2rem;
        }
    }

    span{
        color: var(--primary-color);
    }

    h6{
        color: var(--primary-color);
        font-size: 1.2rem;
        padding-bottom: .6rem;
    }

    //nav toggler
    .hamburger-menu{
        opacity: 0;
        position: absolute;
        right: 5%;
        top: 3%;
        z-index: 15;
        svg{
            font-size: 3rem;
            color: var(---white-color);
        }
        @media screen and (max-width:1200px){
            opacity: 100%;

        }
    }
    .fixed-layer{
        position: fixed;
        @media screen and (min-width:1200px){
            display: none;
        }
    }

    .nav-toggle{
        transform: translateX(0%);
        z-index: 100;
    }
`;

export default GlobalStyle