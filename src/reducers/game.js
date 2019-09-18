const reducer = (state = {},action = {}) => {

    switch (action.type) {
        case 'LOSE_EVERYTHING':
            return {
                ...state,
                score: action.game.score
            }
        case 'LOAD_ALL_GAMES':
            console.log(action.games+"hello")
            return {
                ...state,
                games: action.games
            }
        case 'LOSE_A_TURN':
            return {
                ...state,
                guessed: action.game.guessed,
                turn: action.game.turn
            }
        case 'WRONG_ANSWER':
            return {
                ...state,
                turn: action.game.turn
            }
        case 'GAME_UPDATED':
            return {
                ...state,
                guessed: action.game.guessed,
                puzzle: action.game.words,
                score: action.game.score
            }
        case 'NEXT_PUZZLE':
            const nextWord = action.game.words[0].split("")
            const nextPuzzle = nextWord.map(letter => {
                if (letter !== " ") {
                    return "□"
                } else {
                    return " "
                }
            })
            return {
                ...state,
                guessed: action.game.guessed,
                word: action.game.words[0],
                clue: action.game.words[1],
                puzzle: nextPuzzle
            }
        case 'PUZZLE_SOLVED':
            return {
                ...state,
                guessed: action.game.guessed,
                puzzle: action.game.words
            }
        case 'GAME_FETCHED':
            return {
                ...state,
                action: action.game,
                currentPlayer: action.player
            }
        default:
            return state
    }
}
export default reducer