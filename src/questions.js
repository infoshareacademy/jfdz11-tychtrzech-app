export function randomHash() {
    return Math.random().toString(36).substr(2, 20)
}

export function setCategoryImage(cat) {
    switch (cat) {
        case "Math":
            return 'https://njctl.org/static/core/img/icon-math.svg';
        case "Chemistry":
            return 'https://cdn0.iconfinder.com/data/icons/ecology-63/64/lab-biology-science-research-chemistry-512.png';
        case "Physics":
            return 'https://cdn2.iconfinder.com/data/icons/science-flat-style-1/64/science-atom-education-nuclear-physics-atomic-Electron-512.png';
        case "Biology":
            return 'https://cdn3.iconfinder.com/data/icons/science-116/64/Biology-natural-science-organism-physical-512.png';
    }
}

let QUESTIONS = [
    {
        id: randomHash(),
        nameQuestion: 'Gdzie byles wczoraj',
        goodAnswer: 'kino',
        badAnswerFirst: 'kfc',
        badAnswerSecond: 'szkola',
        badAnswerThird: 'mcdonald',
        labelCategory: 'Chemistry',
        image: setCategoryImage('Chemistry'),
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
        image: setCategoryImage("Physics"),
        labelCategory: 'Physics',
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
        image: setCategoryImage("Math"),
        labelCategory: 'Math',
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
        image: setCategoryImage("Chemistry"),
        labelCategory: 'Chemistry',
        labelDifficulty: 'easy',
        createdDate: '11.05.2019'
    },
    {
        id: randomHash(),
        nameQuestion: 'Gdzie byles wczoraj',
        goodAnswer: 'kino',
        badAnswerFirst: 'kfc',
        badAnswerSecond: 'szkola',
        badAnswerThird: 'mcdonald',
        labelCategory: 'Chemistry',
        image: setCategoryImage('Chemistry'),
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
        image: setCategoryImage("Physics"),
        labelCategory: 'Physics',
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
        image: setCategoryImage("Math"),
        labelCategory: 'Math',
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
        image: setCategoryImage("Biology"),
        labelCategory: 'Biology',
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
        image: setCategoryImage("Biology"),
        labelCategory: 'Biology',
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
        image: setCategoryImage("Chemistry"),
        labelCategory: 'Chemistry',
        labelDifficulty: 'easy',
        createdDate: '11.05.2019'
    },
    {
        id: randomHash(),
        nameQuestion: 'Gdzie byles wczoraj',
        goodAnswer: 'kino',
        badAnswerFirst: 'kfc',
        badAnswerSecond: 'szkola',
        badAnswerThird: 'mcdonald',
        labelCategory: 'Chemistry',
        image: setCategoryImage('Chemistry'),
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
        image: setCategoryImage("Physics"),
        labelCategory: 'Physics',
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
        image: setCategoryImage("Math"),
        labelCategory: 'Math',
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
        image: setCategoryImage("Biology"),
        labelCategory: 'Biology',
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
        image: setCategoryImage("Chemistry"),
        labelCategory: 'Chemistry',
        labelDifficulty: 'easy',
        createdDate: '11.05.2019'
    }
];


export default QUESTIONS
