const reducer = (
    state = {
        word: "",
        guessed: [],
        clue: ""
    },
    action = {}) => {

    switch (action.type) {
        case 'WORD_FETCHED':
            const guess = action.word.content.split("")
            const hidden = guess.map(letter => {
                if (letter !== " ") {
                    return "□"
                } else {
                    return " "
                }
            })
            return {
                word: action.word.content,
                guessed: hidden,
                clue: action.word.clue
            }
        default:
            return state
    }
}
export default reducer