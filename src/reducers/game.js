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
        case 'GAME_UPDATED':
            console.log(state,"before")
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
        return {
            word: action.game.words[0],
            guessed: action.game.guessed,
            clue: action.game.words[1],
            wheelValue: action.game.wheelValue,
            gameId: action.game.id,
            puzzle: puzzle
        }
        default:
        return state
    }
}
export default reducer