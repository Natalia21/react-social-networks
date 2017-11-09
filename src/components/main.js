import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Posts from './posts';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/posts' component={Posts}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
