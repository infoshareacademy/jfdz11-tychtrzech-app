import React from 'react';
import {LoginForm, Navbar, Signup} from './components/'
import Dashboard from './scenes/Dashboard'
import Search from './scenes/Search'

import {
    Route,
    BrowserRouter as Router,
    Switch, Redirect,
} from 'react-router-dom'


function PrivateRoute ({component: Component, authenticated, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...rest}{...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        };
        this.logout = this.logout.bind(this);
    }

    tryLogin = () => {
        this.setState(
            {
                login: true
            }
        );
    };

    logout = () => {
        this.setState(
            {
                login: false
            }
        )
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar login={this.state.login}
                    logout={this.logout}/>
                    <Switch>
                        <Route exact path='/login' render={() => (
                            <LoginForm login={this.state.login}
                                        tryLogin={this.tryLogin}
                            />
                            )}/>
                        <Route exact path='/signup' render={() => (
                           <Signup/>
                        )}/>

                        <PrivateRoute component={Dashboard}
                                      path="/dashboard"
                                      authenticated={this.state.login}/>

                        <PrivateRoute component={Search}
                                      path="/questions"
                                      authenticated={this.state.login}/>
                        <Redirect from='/' to='/login' />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
