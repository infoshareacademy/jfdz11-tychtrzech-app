import React from 'react'
import styles from './LiveSearch.module.css'

let CONTACTS = [
    {
        id: 1,
        name: 'Gdzie byles wczoraj',
        answers: {
            goodAnswer: 'kino',
            badAnswerOne: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png'
    },
    {
        id: 2,
        name: 'Co jadles wczoraj',
        answers: {
            goodAnswer: 'kino',
            badAnswerOne: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn2.iconfinder.com/data/icons/science-flat-style-1/64/science-atom-education-nuclear-physics-atomic-Electron-512.png'

    },
    {
        id: 3,
        name: 'Z kim tanczyles',
        answers: {
            goodAnswer: 'kino',
            badAnswerOne: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://njctl.org/static/core/img/icon-math.svg'
    },
    {
        id: 4,
        name: 'Co to swiat',
        answers: {
            goodAnswer: 'kino',
            badAnswerOne: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png'
    },
    {
        id: 5,
        name: 'Jak masz na imie',
        answers: {
            goodAnswer: 'kino',
            badAnswerOne: 'kfc',
            badAnswerSecond: 'szkola',
            badAnswerThird: 'mcdonald',

        },
        image: 'https://njctl.org/static/core/img/icon-math.svg'
    }
];

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    answersSpans = (answers) => {
        return <span className={styles.answers}> {Object.values(answers).join(" ")} </span>
    };

    render () {
        return (
            <li className={styles.liSearch}>
                <img src={this.props.image} className={styles.imgMini} alt="img"/>
                <span>{this.props.name}</span>
                {this.answersSpans(this.props.answers)}
            </li>
        )
    }
}

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            displayedContacts: CONTACTS
        };
    }


    searchHandler = (event) =>  {
        let searchjQery = event.target.value.toLowerCase(),
            displayedContacts = CONTACTS.filter((el) => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searchjQery) !== -1;
            });
        this.setState({
            displayedContacts: displayedContacts
        })
    };
    render () {
        let contacts = this.state.displayedContacts;
        return (
            <div className={styles.holder}>
                <input placeholder={'Search'} autoFocus={true} type="text" className={styles.search} onChange={this.searchHandler}/>
                <ul className={styles.ulSearch}>
                    {
                        contacts.map((el) => {
                            return <Contact key={el.id}
                                            name={el.name}
                                            image={el.image}
                                            answers={el.answers}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
};

