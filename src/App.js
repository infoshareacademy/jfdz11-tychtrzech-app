import React from 'react';
import {Navbar} from './components/'
import AddQuestion from './scenes/AddQuestions'
import Dashboard from './scenes/Dashboard'

import {
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'


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
                        <Route exact path='/dashboard' render={() => (
                            <Dashboard login={this.state.login}
                            tryLogin={this.tryLogin}
                            />
                            )}
                        />
                        <Route exact path='/add-questions' render={() => (
                            <AddQuestion/>
                        )}
                        />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
