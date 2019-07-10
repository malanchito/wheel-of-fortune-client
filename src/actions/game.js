import request from 'superagent'

export const GAME_FETCHED = 'GAME_FETCHED'

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'

const gameFetched = game => ({
  type: GAME_FETCHED,
  game
})

export const loadGame = (category) => (dispatch) => {
  request(`${baseUrl}/category/${category}`)
    .then(response => {
      const game = {
        words:[response.body.words[0].content,response.body.words[0].clue],
        wheelValue: [100],
        guessed:['b','c','d','f','g','h',
        'j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
      }

      request
        .post(`${baseUrl}/game`)
        .send(game)
        .then(response => {dispatch(gameFetched(response.body))
          })

    .catch(console.error)
    })
    
    .catch(console.error) 
}
  
