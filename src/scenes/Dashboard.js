import React from 'react'
import ChartBar from "../components/ChartBar"
import ChartPie from "../components/ChartPie"
import NameDash from '../components/NameDash/NameDash';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


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
                <Container>
                    <Row>
                        <Col><ChartPie /></Col>
                        <Col><ChartBar legendPosition='bottom'/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dashboard
