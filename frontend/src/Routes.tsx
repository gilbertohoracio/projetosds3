import DashBoard from 'pages/DashBoard';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>

            <Route path = "/" exact>
                <Home></Home>
            </Route>

            <Route  path = "/Dashboard">
                <DashBoard></DashBoard>

            </Route>         
        </Switch>
            
        </BrowserRouter>
    );
}

export default Routes;
