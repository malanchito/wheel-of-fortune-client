const setWheelValue = (
                state = {
                    wheelValue: ""
                },
                action = {}) => {

                    switch(action.type){
                        case 'VALUE_UPDATED':
                    return {
                        ...state,
                        ...action.payload
                        
                    }
                    default:
                        return state
                    }
                }
export default setWheelValue