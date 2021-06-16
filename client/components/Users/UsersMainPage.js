import React from 'react';
import { hot } from 'react-hot-loader';
import NavBar from '../NavBar';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Footer from '../Footer';
import UsersMain from './UsersMain';
import UsersPlan from './UsersPlan';


const UsersMainPage = () => {
    let {path, url} = useRouteMatch();    
    return(
        <div className="users-main-page-container">
         <NavBar className="nav-bar"/>
            <div className="main-container">                
                <Switch>                    
                    <Route path={`${path}/planes`} component={UsersPlan}/>        
                    <Route path={`${path}`} component={ UsersMain }/>                                
                </Switch>                
            </div>       
                 
        </div>        
    );
}
export default hot(module)(UsersMainPage);