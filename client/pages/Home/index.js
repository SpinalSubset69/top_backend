import React, { useState } from 'react'
import { hot } from 'react-hot-loader';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import UsersPlan from '../../components/Users/UsersPlan';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import { HomeContainer } from './HomeElements';
import { HomeUsers } from '../../components/UsersMain';
const Home = () => {    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    console.log("Home");
     return (
        <>            
      
            <Router>      
                <SideBar isOpen={isOpen} toggle={toggle}/>
                <NavBar toggle={toggle}/>       
                <HomeContainer>
                    <Switch>                    
                        <Route exact path='/' component={ HomeUsers }/>                                
                        <Route path= '/planes' component={UsersPlan}/>                            
                    </Switch>      
                </HomeContainer>         
            </Router>                             
        </>
    )
}


export default hot(module)(Home);