export const GET_GAMES = 'GET GAMES'

export function setGames(event) {
  const { data } = event
  const games = JSON.parse(data)
  return {
    type: GET_GAMES,
    payload: games
  }
}
