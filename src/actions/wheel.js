import request from 'superagent'

export const VALUE_UPDATED = 'VALUE_UPDATED'

const wheelValueUpdated = wheelValue => ({
    type: VALUE_UPDATED,
    wheelValue
  })

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'
// const baseUrl = 'http://localhost:5000'

export const saveWheelValue = (dataValue) => (dispatch) =>  {

    const wheel = {
        wheelValue:dataValue
    }
        
        request.put(`${baseUrl}/game/1`,wheel)
            .then(response => {
                dispatch(wheelValueUpdated(response.body))
            })
            .catch(console.error)
    
}