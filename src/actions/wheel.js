import request from 'superagent'

export const VALUE_UPDATED = 'VALUE_UPDATED'

const wheelValueUpdated = wheelValue => ({
    type: VALUE_UPDATED,
    wheelValue
  })

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'

export function saveWheelValue() {

    const dataValue = {
        wheelValue:1234

    }
    console.log('hello')
    return (dispatch) => {
        request.put(`${baseUrl}/game/:id`)
            .send(dataValue)
            .then(response => {
                dispatch(wheelValueUpdated(response.body))
            })
    }
}