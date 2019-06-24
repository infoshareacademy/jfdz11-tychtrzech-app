import React from 'react'
import styles from './LiveSearch.module.css'
import {Col, Row, Container, Button} from 'react-bootstrap';
import AddEditQuestionModal from "../AddEditQuestionModal/AddEditQuestionModal";

let QUESTIONS = [
    {
        id: 1,
        name: 'Gdzie byles wczoraj',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
        labelCategory: 'chemistry',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: 2,
        name: 'Co jadles wczoraj',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn2.iconfinder.com/data/icons/science-flat-style-1/64/science-atom-education-nuclear-physics-atomic-Electron-512.png',
        labelCategory: 'physics',
        labelDifficulty: 'hard',
        createdDate: '11.05.2019'
    },
    {
        id: 3,
        name: 'Z kim tanczyles',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://njctl.org/static/core/img/icon-math.svg',
        labelCategory: 'math',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: 4,
        name: 'Co to swiat',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
        labelCategory: 'chemistry',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: 5,
        name: 'Jak masz na imie',
        answers: {
            goodAnswer: 'kino',
            badAnswerFirst: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://njctl.org/static/core/img/icon-math.svg',
        labelCategory: 'math',
        labelDifficulty: 'easy',
        createdDate: '11.05.2019'
    }
];

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props};
    }



    answersSpans = (answers) => {
        return <span className={styles.answers}> {Object.values(answers).join(" ")} </span>
    };

    render () {

        let variant = 'primary';
        switch (this.props.labelDifficulty){
            case "easy":
                variant = 'success';
                break;
            case "medium":
                variant = 'warning';
                break;
            case "hard":
                variant = 'danger'
        }

        return (
            <Container className={styles.liSearch}>
                <Row>
                    <Col><img src={this.props.image} className={styles.imgMini} alt="img"/>
                        <span style={{display: 'inline', width: '200px'}}>{this.props.name}</span>
                        {this.answersSpans(this.props.answers)}
                    </Col>
                    <Col style={{padding: '5px'}}><Button style={{marginLeft: '40px'}} variant={variant} size={"sm"}>
                        {this.props.labelDifficulty}</Button></Col>
                    <Col><p style={{display: 'inline', color: 'grey'}}> Created on: {this.props.createdDate}</p></Col>
                </Row>
            </Container>
        )
    }
}

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            displayedContacts: QUESTIONS,
            modalShow: false
        };
    }


    searchHandler = (event) =>  {
        let searchjQery = event.target.value.toLowerCase(),
            displayedContacts = QUESTIONS.filter((el) => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searchjQery) !== -1;
            });
        this.setState({
            displayedContacts: displayedContacts
        })
    };
    render () {
        let contacts = this.state.displayedContacts;
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className={styles.holder}>
                <div className={styles.flexContainerSearchAdd} style={{textAlign: 'center', marginBottom: '20px',}}>

                <input placeholder={'Search'} autoFocus={true} type="text"
                       className={styles.searchInput} onChange={this.searchHandler}
                       style={{borderTopRightRadius: '0',
                           borderBottomRightRadius: '0'}}
                />
                <Button variant={"dark"} style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}
                        onClick={() => this.setState({ modalShow: true })}>Add</Button>
                </div>

                <AddEditQuestionModal show={this.state.modalShow} onHide={modalClose} />

                <ul className={styles.ulSearch}>
                    {
                        contacts.map((el) => {
                            return <Contact key={el.id}
                                            name={el.name}
                                            image={el.image}
                                            answers={el.answers}
                                            labelCategory={el.labelCategory}
                                            labelDifficulty={el.labelDifficulty}
                                            createdDate={el.createdDate}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
};

