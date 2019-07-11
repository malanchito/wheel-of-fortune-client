import request from 'superagent'

export const GAME_FETCHED = 'GAME_FETCHED'

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'

const gameFetched = (game,player) => ({
  type: GAME_FETCHED,
  game,player
})

export const loadGame = (id,player) => (dispatch) => {
  request(`${baseUrl}/game/${id}`)
    .then(response => {
      const gameLoaded = JSON.parse(response.text)
      dispatch(gameFetched(gameLoaded,player))
    })
    .catch(console.error)
}

export const newGame = (category) => (dispatch) => {
  request(`${baseUrl}/category/${category}`)
    .then(response => {
              const game = {
                words:[response.body.words[0].content,response.body.words[0].clue,category],
                wheelValue: 100,
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
                    .post(`${baseUrl}/game`)
                    .send(game)
                    .then(response => {dispatch(gameFetched(response.body))
                      })
                    .catch(console.error)
                  })
                .catch(console.error)
    })
    .catch(console.error) 
}
  
