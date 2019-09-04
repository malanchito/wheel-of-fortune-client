import request from 'superagent'

export const GAME_FETCHED = 'GAME_FETCHED'
export const LOAD_ALL_GAMES = 'LOAD_ALL_GAMES'

const baseUrl = 'http://localhost:5000'

const gameFetched = (game,word,player) => ({
  type: GAME_FETCHED,
  game,word,player
})

export function loadGames (event,gameId,player){
  const {data}=event
  const games=JSON.parse(data)
  const game=games.find(game=>game.id===parseInt(gameId))
  return {
      type: GAME_FETCHED,
      game,player
  }
}

export const loadGame = (id,player) => (dispatch) => {
  request(`${baseUrl}/game/${id}`)
    .then(response => {
      const gameLoaded = JSON.parse(response.text)
      dispatch(gameFetched(gameLoaded,player))
    })
    .catch(console.error)
}

export const newGame = (player) => (dispatch) => {
  request(`${baseUrl}/words/1`)
    .then(response => {
      const words = response.body
      const word = words[Math.random*words.length]
      const wordLetters = word.puzzle.split("")
      const guessed = wordLetters.map(letter => letter === " " || "'" ? letter : '□')
      const game = {
        consonants: ['b','c','d','f','g','h',
        'j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'],
        vowels: ['a','e','i','o','u'],
        wordId: word.id,
        guessed: guessed,
        round: 1,
        finished: false
      }
      request
        .post(`${baseUrl}/game`)
        .send(game)
        .then(response => {dispatch(gameFetched(response.body,player))
        })
        .catch(console.error)
    })
    .catch(console.error) 
}
  
