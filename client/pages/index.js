import React, { useState } from 'react'
import { hot } from 'react-hot-loader';
import NavBar from '../components/NavBar/index';
import SideBar from '../components/SideBar';
import UsersMain from '../components/Users/UsersMain';
import UsersPlan from '../components/Users/UsersPlan';
import { Switch, Route, useRouteMatch } from 'react-router';

const Home = () => {
    const {path} = useRouteMatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

     return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <div className="main-container">                
                <Switch>                    
                    <Route path={`${path}/planes`} component={UsersPlan}/>        
                    <Route path={`${path}`} component={ UsersMain }/>                                
                </Switch>                
            </div>       
        </>
    )
}


export default hot(module)(Home);