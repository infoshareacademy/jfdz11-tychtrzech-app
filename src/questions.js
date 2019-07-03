export function randomHash() {
    return Math.random().toString(36).substr(2, 20)
}

let QUESTIONS = [
    {
        id: randomHash(),
        nameQuestion: 'Gdzie byles wczoraj',
        goodAnswer: 'kino',
        badAnswerFirst: 'kfc',
        badAnswerSecond: 'szkola',
        badAnswerThird: 'mcdonald',
        image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
        labelCategory: 'chemistry',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: randomHash(),
        nameQuestion: 'Co jadles wczoraj',
        goodAnswer: 'kino',
        badAnswerFirst: 'kfc',
        badAnswerSecond: 'szkola',
        badAnswerThird: 'mcdonald',
        image: 'https://cdn2.iconfinder.com/data/icons/science-flat-style-1/64/science-atom-education-nuclear-physics-atomic-Electron-512.png',
        labelCategory: 'physics',
        labelDifficulty: 'hard',
        createdDate: '11.05.2019'
    },
    {
        id: randomHash(),
        nameQuestion: 'Z kim tanczyles',
        goodAnswer: 'kino',
        badAnswerFirst: 'kfc',
        badAnswerSecond: 'szkola',
        badAnswerThird: 'mcdonald',
        image: 'https://njctl.org/static/core/img/icon-math.svg',
        labelCategory: 'math',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: randomHash(),
        nameQuestion: 'Co to swiat',
        goodAnswer: 'kino',
        badAnswerFirst: 'kfc',
        badAnswerSecond: 'szkola',
        badAnswerThird: 'mcdonald',
        image: 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png',
        labelCategory: 'chemistry',
        labelDifficulty: 'medium',
        createdDate: '11.05.2019'
    },
    {
        id: randomHash(),
        nameQuestion: 'Jak masz na imie',
        goodAnswer: 'kino',
        badAnswerFirst: 'kfc',
        badAnswerSecond: 'szkola',
        badAnswerThird: 'mcdonald',
        image: 'https://njctl.org/static/core/img/icon-math.svg',
        labelCategory: 'math',
        labelDifficulty: 'easy',
        createdDate: '11.05.2019'
    }
];


export default QUESTIONS
