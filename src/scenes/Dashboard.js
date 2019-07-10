import React from 'react'
import ChartBar from "../components/ChartBar"
import ChartPie from "../components/ChartPie"
import NameDash from '../components/NameDash/NameDash';

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
                <br></br>
                <NameDash/>
                <br/>
                <ChartPie />
                <ChartBar legendPosiotion='bottom'/>

            </div>
        )
    }
}

export default Dashboard
