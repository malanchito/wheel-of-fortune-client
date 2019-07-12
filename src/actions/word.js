import request from 'superagent'

export const GAME_UPDATED = 'GAME_UPDATED'
export const PUZZLE_SOLVED = 'PUZZLE_SOLVED'
export const NEXT_PUZZLE = 'NEXT_PUZZLE'
export const LOSE_A_TURN = 'LOSE_A_TURN'
export const WRONG_ANSWER = 'WRONG_ANSWER'

// const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'
const baseUrl = 'http://localhost:5000'

const gameUpdated = game => ({
  type: GAME_UPDATED,
  game
})

const puzzleSolved = game => ({
  type: PUZZLE_SOLVED,
  game
})

const nextPuzzle = game => ({
  type: NEXT_PUZZLE,
  game
})

const loseATurn = game => ({
  type: LOSE_A_TURN,
  game
})

const wrongAnswer = game => ({
  type: WRONG_ANSWER,
  game
})

export const guessPuzzle = (answer,word,gameId,players,playerId) => (dispatch) => {
  if(answer===word){
    const solvedPuzzle = word.split("")
    const data = {
      words: solvedPuzzle,
      guessed: []
    }
    request
            .put(`${baseUrl}/game/${gameId}`,data)
            .then(response => {dispatch(puzzleSolved(response.body))
            })
            .catch(console.error)
    
  }else{
    const turn = {
      turn:0
    }
    const otherPlayer = players.find(player=>player.id!==playerId)
    const turnNextPlayer = {
      turn:1
    }
    request
    .put(`${baseUrl}/players/${playerId}`,turn)
    .then(response=>{
      request
      .put(`${baseUrl}/players/${otherPlayer.id}`,turnNextPlayer)
      .then(response=>dispatch(wrongAnswer(turn)))
      .catch(console.error) 
    })   
    .catch(console.error)    
  }
}

export const nextWord = (gameId,category) => (dispatch) => {
  request(`${baseUrl}/category/${category}`)
      .then(response => {
        const nextWord = {
          words:[response.body.words[0].content,response.body.words[0].clue],
          guessed:['b','c','d','f','g','h',
                'j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
        }
        const deleteWord = {
          content: response.body.words[0].content
        }
        request
          .delete(`${baseUrl}/word`)
          .send(deleteWord)
          .then(response=>{
            request
            .put(`${baseUrl}/game/${gameId}`,nextWord)
            .then(response => {dispatch(nextPuzzle(response.body))
            })
            .catch(console.error)
          })
          .catch(console.error)
      })
      .catch(console.error)
}


export const checkWord = (word,letter,gameId,guessed,puzzle,
                            wheelValue,score,playerId,players) => (dispatch) =>{
  const containsLetter = word.split(letter)
  const wordArray = word.split("")
  const remainingLetters=guessed.filter(character=>character!==letter)
  const guessedLetters = puzzle.filter(character=>character!=='□')

  if(containsLetter.length!==1){
    guessedLetters.push(letter)
    const numberOfLetters=wordArray.filter(char=>char===letter)
    const money=score+(numberOfLetters.length*wheelValue)
    const comparingPuzzle = wordArray.map(character=>
                                            guessedLetters.filter(char=>
                                                                    char===character))
                                                                    
    const newPuzzle = comparingPuzzle.map(q=>{
                                              if(q[0]===undefined){
                                                return '□'
                                              }else{
                                                return q[0]
                                              }
      })
    const updatedGame = {
      words: newPuzzle,
      guessed: remainingLetters,
    }
    const newScore = {
      score:money
    }
    const newData = {
      words: newPuzzle,
      guessed: remainingLetters,
      score:money
    }
      request
      .put(`${baseUrl}/game/${gameId}`,updatedGame)
      .then(response => {
        request
        .put(`${baseUrl}/players/${playerId}`,newScore)
        .then(response=>dispatch(gameUpdated(newData))
          )      
      })
      .catch(console.error)
   
  }else{
    const updatedGame = {
      guessed: remainingLetters,
    }
    const turn = {
      turn:0
    }
    const otherPlayer = players.find(player=>player.id!==playerId)
    const turnNextPlayer = {
      turn:1
    }
    const newData = {
      guessed: remainingLetters,
      turn:0
    }
      request
      .put(`${baseUrl}/game/${gameId}`,updatedGame)
      .then(response => {
        request
        .put(`${baseUrl}/players/${playerId}`,turn)
        .then(response=>{
          request
          .put(`${baseUrl}/players/${otherPlayer.id}`,turnNextPlayer)
          .then(response=>dispatch(loseATurn(newData)))
          .catch(console.error) 
        })   
        .catch(console.error)    
      })
      .catch(console.error)
  }

  
}