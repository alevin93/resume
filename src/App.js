import Sidebar from "./components/Sidebar";
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from "@material-ui/core";
import { useState } from "react";

// TO PUSH TO GIT
// git add .
// git commit -m 'description of changes'
// git push

function App() {

  const [ toggle, setToggle ] = useState(false);

  const handleToggle=()=> {

    console.log("Toggle is: " + toggle);
    
    if(toggle) {  
      setToggle(!toggle);
    }
    else if (!toggle) {
      setToggle(toggle);
    }
  }

  const closeNav=()=> {
    console.log("closeNav is run");
    setToggle(!toggle)
  }

  return (
    <div className="App" >

      <Sidebar toggle={toggle} fn={closeNav} />
      <div className="hamburger-menu">
        <IconButton onClick={()=>setToggle(!toggle)}>
          <div className="fixed-layer">
              {!toggle ? <MenuIcon /> : <CloseIcon /> }
          </div>
        </IconButton>
      </div>
      <MainContentStyled onClick={handleToggle} >
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Switch>
          <Route path="/" exact >
            <HomePage />
          </Route>
          <Route path="/about" exact >
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  transition: all .7s ease-in-out;
  @media screen and (max-width:1200px){
    margin-left: 0px;
  }

  .lines{
    visibility: hidden;
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
