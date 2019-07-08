import React from 'react'
import styles from './LiveSearch.module.css'
import {Col, Row, Container, Button} from 'react-bootstrap';
import AddEditQuestionModal from "../AddEditQuestionModal/AddEditQuestionModal";
import questions, {setCategoryImage} from "../../questions";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";
import Star from '@material-ui/icons/StarRate';
import Accordion from "react-bootstrap/Accordion";
import Card from "@material-ui/core/Card";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

let items = [];


class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            questionObject: this.props.questionObject,
        };
    }

    favoriteStar = () => {
        return this.props.favorite ? <span> <Star htmlColor="#FFE21F"/> </span> :
            <span> <Star htmlColor="grey"/> </span>
    };

    textFavoriteOnDropdown = () => {
        return this.props.favorite ? 'unfavourite' : 'add favorite'
    };

    render() {
        let variant = 'primary';
        switch (this.props.labelDifficulty) {
            case "easy":
                variant = 'success';
                break;
            case "medium":
                variant = 'warning';
                break;
            case "hard":
                variant = 'danger'
        }
        const questionObjecto =
            {
                id: this.props.id,
                nameQuestion: this.props.nameQuestion,
                goodAnswer: this.props.goodAnswer,
                badAnswerFirst: this.props.badAnswerFirst,
                badAnswerSecond: this.props.badAnswerSecond,
                badAnswerThird: this.props.badAnswerThird,
                image: this.props.image,
                labelCategory: this.props.labelCategory,
                labelDifficulty: this.props.labelDifficulty,
                createdDate: this.props.createdDate,
                variantDifficultyStatus: variant,
                favorite: this.props.favorite
            };

        return (
            <Container className={styles.liSearch}>
                <Row>
                    <Col style={{flexGrow: '1'}}>
                        <span onClick={() => {
                            this.props.editQuestion(this.props.handleClickStar(questionObjecto))
                        }}>{this.favoriteStar()}
                        </span>

                    </Col>
                    <Col style={{flexGrow: '10'}}><img src={this.props.image} className={styles.imgMini} alt="img"/>
                        <span style={{display: 'inline', width: '200px'}}>{this.props.nameQuestion}</span>
                        <p></p>
                        <p> {this.props.goodAnswer} {this.props.badAnswerFirst}</p>
                        <p>{this.props.badAnswerSecond} {this.props.badAnswerThird}</p>
                    </Col>
                    <Col style={{padding: '5px', width: '5%', flexGrow: '8'}}><Button style={{marginLeft: '40px'}}
                                                                                      variant={variant} size={"sm"}>
                        {this.props.labelDifficulty}</Button></Col>
                    <Col style={{flexGrow: '9'}}><p style={{display: 'inline', color: 'grey'}}> Created
                        on: {this.props.createdDate}</p></Col>
                    <Col style={{padding: '5px', textAlign: 'right', flexGrow: '1'}}>
                        <ButtonToolbar style={{paddingRight: '10px', justifyContent: 'flex-end', marginRight: '5px'}}
                                       size={'sm'}>
                            <DropdownButton
                                drop={'left'}
                                title={''}
                                variant={'none'}
                                id={'dropdown-variants-difficulty'}
                                key={'options'}>
                                <Dropdown.Item eventKey="edit"
                                               onClick={() => this.props.openEditQuestion(questionObjecto)}>edit</Dropdown.Item>
                                <Dropdown.Item eventKey="delete"
                                               onClick={() => this.props.deleteQuestion(this.props.id)}>delete</Dropdown.Item>
                                <Dropdown.Item eventKey="favorite"
                                               onClick={() => {
                                                   this.props.editQuestion(this.props.handleClickStar(questionObjecto))
                                               }
                                               }>{this.textFavoriteOnDropdown()}</Dropdown.Item>
                            </DropdownButton>
                        </ButtonToolbar>
                    </Col>
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
            modalShow: false,
            questions: questions,
            mode: "Add",
            questionObject: {
                id: '',
                nameQuestion: '',
                goodAnswer: '',
                badAnswerFirst: '',
                badAnswerSecond: '',
                badAnswerThird: '',
                labelDifficulty: 'Difficulty',
                labelCategory: 'Category',
                createdDate: '11.05.2019',
                variantDifficultyStatus: 'Dark',
                favorite: false
            },
            filters: {
                favorites: false
            },
            searchPhrase: '',
            paginationChunk: 1,
            paginationChunks: [],
        };
    }

    get filteredQuestions() {
        const {questions, searchPhrase} = this.state;

        if (this.state.filters.favorites === true){
            return questions.filter((obj) => obj.favorite === true).filter((el) => {
                let searchValue = el.nameQuestion.toLowerCase();
                return searchValue.indexOf(searchPhrase) !== -1;
            });}

        if (searchPhrase === '') {
            return questions
        }
        return questions.filter((el) => {
            let searchValue = el.nameQuestion.toLowerCase();
            return searchValue.indexOf(searchPhrase) !== -1;
        });
    }

    handleClickFilter = (filter) => {
        this.setState({
            filters: {
                ...this.state.filters,
                [filter]: !this.state.filters[filter]
            }
        })
    };
    searchHandler = (event) => {
        this.setState({
            searchPhrase: event.target.value.toLowerCase()
        })
    };

    addToListQuestion = (question) => {
        let {questions} = this.state;
        questions = [...questions, question];
        this.setState(({
            questions
        }))
    };

    openEditQuestion = (questionObject) => {
        this.setState({
            questionObject: questionObject,
            mode: "Update",
            modalShow: true
        })
    };

    editQuestion = (questionObject) => {
        let {questions} = this.state;
        const index = questions.findIndex(
            question => question.id === questionObject.id
        );
        questions[index] = questionObject;

        this.setState(({
            questions
        }))
    };

    handleClickStar = (questionObjectoo) => {
        questionObjectoo = {
            ...questionObjectoo,
            favorite: !questionObjectoo.favorite
        };

        return questionObjectoo
    };

    deleteQuestion = (idQuestion) => {
        let {questions} = this.state;
        questions = questions.filter(function (obj) {
            return obj.id !== idQuestion;
        });
        this.setState(({
            questions
        }))
    };

    setLabelDifficulty = (variant, label) => this.setState({
        questionObject: {
            ...this.state.questionObject,
            variantDifficultyStatus: variant,
            labelDifficulty: label,
        }
    });

    setLabelCategory = (c) => this.setState({
        questionObject: {
            ...this.state.questionObject,
            labelCategory: c,
            image: setCategoryImage(c)
        }
    });

    inputValue = (propsName, value) => {
        this.setState({
            questionObject: {
                ...this.state.questionObject,
                [propsName]: value
            }
        });
    };

    resetData = () =>
        this.setState({
            questionObject: {
                nameQuestion: '',
                goodAnswer: '',
                badAnswerFirst: '',
                badAnswerSecond: '',
                badAnswerThird: '',
                labelDifficulty: 'Difficulty',
                labelCategory: 'Category',
                createdDate: '11.05.2019',
                variantDifficultyStatus: 'Dark',
                favorite: false,
            }
        });

    showPaginationChunk = (number) => {
        this.setState({
            paginationChunk: number
        })
    };

    render() {
        let modalClose = () => this.setState({modalShow: false});

        let paginate = (questions) => {
            let chunk = 3;
            let paginationChunks = [];

            for (let i = 0, j = questions.length; i < j; i += chunk) {
                paginationChunks.push(questions.slice(i, i + chunk))
            }

            items = [];
            for (let number = 1; number <= paginationChunks.length; number++) {
                items.push(
                    <Pagination.Item key={number} active={this.state.paginationChunk === number}
                                     onClick={() => this.showPaginationChunk(number)}
                    >
                        {number}
                    </Pagination.Item>,
                );
            }

            if (this.state.paginationChunk - 1 === -1) {
                return []
            }
            if (this.state.paginationChunk - 1 >= items.length && Object.keys(paginationChunks).length !== 0) {
                this.showPaginationChunk(items.length);
                return (paginationChunks[items.length - 1])
            } else {
                return Object.keys(paginationChunks).length === 0 ? [] : paginationChunks[this.state.paginationChunk - 1]
            }
        };
        return (
            <div className={styles.holder}>
                <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Filters!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <ButtonToolbar style={{margin: '10px', padding: '0px'}}>
                            <ToggleButtonGroup name='filters' type="checkbox" defaultValue={[1, 8]}>
                                <ToggleButton value={1}
                                              variant={'outline-warning'}
                                              style={{padding: '0px', margin: '10px'}}
                                              onChange={() => this.handleClickFilter('favorites')}
                                >
                                    Favorites</ToggleButton>
                                <ToggleButton value={2}
                                              variant={'test'}
                                              style={{padding: '0px', margin: '10px'}}
                                >
                                    Math</ToggleButton>
                                <ToggleButton value={3}
                                              variant={'test'}
                                              style={{padding: '0px', margin: '10px'}}
                                >
                                    Biology</ToggleButton>
                                <ToggleButton value={4}
                                              variant={'test'}
                                              style={{padding: '0px', margin: '10px'}}
                                >
                                    Chemistry</ToggleButton>
                                <ToggleButton value={5}
                                              variant={'test'}
                                              style={{padding: '0px', margin: '10px'}}
                                >
                                    Physics</ToggleButton>
                                <ToggleButton
                                    value={6}
                                    variant={'sdanger'}
                                    style={{padding: '0px', margin: '10px'}}
                                >
                                    hard</ToggleButton>
                                <ToggleButton
                                    value={7}
                                    variant={'swarning'}
                                    style={{padding: '0px', margin: '10px'}}
                                >
                                    medium</ToggleButton>
                                <ToggleButton
                                    value={8}
                                    variant={'ssuccess'}
                                    style={{padding: '0px', margin: '10px'}}
                                >
                                    easy</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Accordion.Collapse>
                </Accordion>
                <div className={styles.flexContainerSearchAdd} style={{textAlign: 'center', marginBottom: '20px',}}>

                    <input placeholder={'Search'} autoFocus={true} type="text"
                           className={styles.searchInput} onChange={this.searchHandler}
                           style={{
                               borderTopRightRadius: '0',
                               borderBottomRightRadius: '0'
                           }}
                    />
                    <Button variant={"dark"} style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}
                            onClick={() => this.setState({mode: "Add", modalShow: true,})}>Add</Button>
                </div>

                <AddEditQuestionModal editQuestion={this.editQuestion}
                                      questionObject={this.state.questionObject}
                                      mode={this.state.mode}
                                      show={this.state.modalShow}
                                      onHide={modalClose}
                                      addToListQuestion={this.addToListQuestion}
                                      resetData={this.resetData}
                                      setLabelDifficulty={this.setLabelDifficulty}
                                      setLabelCategory={this.setLabelCategory}
                                      inputValue={this.inputValue}

                />

                <ul className={styles.ulSearch}>
                    {
                        paginate(this.filteredQuestions).map((el) => {
                            return <Question
                                deleteQuestion={this.deleteQuestion}
                                openEditQuestion={this.openEditQuestion}
                                handleClickStar={this.handleClickStar}
                                editQuestion={this.editQuestion}
                                key={el.id}
                                questionObject={this.state.questionObject}
                                id={el.id}
                                nameQuestion={el.nameQuestion}
                                image={el.image}
                                goodAnswer={el.goodAnswer}
                                badAnswerFirst={el.badAnswerFirst}
                                badAnswerSecond={el.badAnswerSecond}
                                badAnswerThird={el.badAnswerThird}
                                labelCategory={el.labelCategory}
                                labelDifficulty={el.labelDifficulty}
                                createdDate={el.createdDate}
                                favorite={el.favorite}
                            />
                        })
                    }
                </ul>
                <Pagination style={{justifyContent: "center"}}>{items}</Pagination>
            </div>
        )
    }
}

