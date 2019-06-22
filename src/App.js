import React from 'react';
import {LoginModal, Navbar} from './components/'
import AddQuestion from './scenes/AddQuestions'
import Dashboard from './scenes/Dashboard'

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
        )
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
                            <LoginModal login={this.state.login}
                                        tryLogin={this.tryLogin}
                            />
                            )}/>
                        <PrivateRoute component={Dashboard}
                                      path="/dashboard"
                                      authenticated={this.state.login}/>

                        <PrivateRoute component={AddQuestion}
                                      path='/add-questions'
                                      authenticated={this.state.login}
                                      />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
