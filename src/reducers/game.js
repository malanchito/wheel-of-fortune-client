const reducer = (
    state = {
        word:"",
        guessed:[],
        clue:"",
        wheelValue:0,
        gameId:0
    },
    action = {}) => {

    switch(action.type){
        case 'LOAD_ALL_GAMES':
            return {...state,
                games:action.payload
            }
        case 'LOSE_A_TURN':
            return {...state,
                guessed: action.game.guessed,
                turn: action.game.turn
            }
        case 'WRONG_ANSWER':
            return {...state,
                turn: action.game.turn
            }
        case 'GAME_UPDATED':
            return {...state,
                guessed: action.game.guessed,
                puzzle: action.game.words,
                score: action.game.score
            }
        case 'NEXT_PUZZLE':
            const nextWord = action.game.words[0].split("")
            const nextPuzzle=nextWord.map(letter=>{
                if(letter!==" "){
                    return "□"
                }else{
                    return " "
                }
            })
            return {...state,
                guessed: action.game.guessed,
                word: action.game.words[0],
                clue: action.game.words[1],
                puzzle: nextPuzzle
            }
        case 'PUZZLE_SOLVED':
            return {...state,
                guessed: action.game.guessed,
                puzzle: action.game.words
            }
        case 'GAME_FETCHED':
            const word = action.game.words[0].split("")
            const puzzle=word.map(letter=>{
                if(letter!==" "){
                    return "□"
                }else{
                    return " "
                }
            })
            const currentPlayer = action.game.players
                                    .filter(player=>player.name===action.player)
            return {
                word: action.game.words[0],
                guessed: action.game.guessed,
                clue: action.game.words[1],
                wheelValue: action.game.wheelValue,
                gameId: action.game.id,
                puzzle: puzzle,
                category: action.game.words[2],
                players: action.game.players,
                currentPlayer: currentPlayer[0].name,
                score: currentPlayer[0].score,
                turn: currentPlayer[0].turn,
                playerId: currentPlayer[0].id
            }
        default:
            return state
    }
}
export default reducer