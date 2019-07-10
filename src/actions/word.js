import request from 'superagent'

export const WORD_FETCHED = 'WORD_FETCHED'
export const GAME_UPDATED = 'GAME_UPDATED'

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'

const wordFetched = word => ({
  type: WORD_FETCHED,
  word
})

const gameUpdated = game => ({
  type: GAME_UPDATED,
  game
})

export const loadWord = () => (dispatch) => {
  request(`${baseUrl}/category/9`)
    .then(response => {
      dispatch(wordFetched(response.body.words[0]))
    })
    .catch(console.error)
}

export const checkWord = (word,letter,gameId,guessed,puzzle) => (dispatch) =>{
  const containsLetter = word.split(letter)
  const wordArray = word.split("")
  const remainingLetters=guessed.filter(character=>character!==letter)
  const guessedLetters = puzzle.filter(character=>character!=='□')
  if(containsLetter.length!==1){
    guessedLetters.push(letter)
  }
  const comparingPuzzle = wordArray.map(character=>guessedLetters.filter(char=>char===character))
  const newPuzzle = comparingPuzzle.map(q=>{
    if(q[0]===undefined){
      return '□'
    }else{
      return q[0]
    }
    })
  const data = {
    words: newPuzzle,
    guessed: remainingLetters
  }
    request
    .put(`${baseUrl}/game/${gameId}`,data)
    .then(response => {
      dispatch(gameUpdated(response.body))
    })
    .catch(console.error)
  
}