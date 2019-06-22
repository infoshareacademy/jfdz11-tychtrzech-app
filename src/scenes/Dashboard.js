import React from 'react'
import {LoginModal} from '../components'


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login
        }
    };

    render() {
        return (
            <div>
                <LoginModal login={this.props.login}
                            tryLogin={this.props.tryLogin}
                />
            </div>
        )
    }
}

export default Dashboard
