import request from 'superagent'

export const GAME_FETCHED = 'GAME_FETCHED'
export const LOAD_ALL_GAMES = 'LOAD_ALL_GAMES'

const baseUrl = 'http://localhost:5000'

const gameFetched = (game,player) => ({
  type: GAME_FETCHED,
  game,player
})

const gamesFetched = (games) => ({
  type: LOAD_ALL_GAMES,
  games
})

export const loadGames = (jwt) => dispatch => {
  request
    .get(`${baseUrl}/games/`)
    .set('Authorization',`Bearer ${jwt}`)
    .then(response => {
      dispatch(gamesFetched(response.body))
    })
    .catch(console.error)
}

export const loadGame = (id,player) => (dispatch) => {
  request(`${baseUrl}/game/${id}`)
    .then(response => {
      const gameLoaded = JSON.parse(response.text)
      dispatch(gameFetched(gameLoaded,player))
    })
    .catch(console.error)
}

export const newGame = (jwt,player) => (dispatch) => {
  request
    .get(`${baseUrl}/words/1`)
    .set('Authorization',`Bearer ${jwt}`)
    .then(response => {
      const word = response.body.word
      const wordLetters = word.puzzle.split("")
      const guessed = wordLetters.map(letter => letter === " " ? 
                                                  letter : letter === "'"?
                                                    letter : '□')
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
        .set('Authorization',`Bearer ${jwt}`)
        .send(game)
        .then(response => {dispatch(gameFetched(response.body,player))
        })
        .catch(console.error)
    })
    .catch(console.error) 
}
  
