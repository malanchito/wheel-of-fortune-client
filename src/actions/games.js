export const GET_GAMES = 'GET GAMES'

export function setGames(event) {
  console.log('am i calling??')
  const { data } = event
  const games = JSON.parse(data)
  return {
    type: GET_GAMES,
    payload: games
  }
}
