import React from 'react'


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
                <br/>
               Dashboard
            </div>
        )
    }
}

export default Dashboard
