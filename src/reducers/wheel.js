const setWheelValue = (
                state = {
                    wheelValue: ""
                },
                action = {}) => {

                    switch(action.type){
                        case 'VALUE_UPDATED':
                            
                    return action.wheelValue
  
                    default:
                        return state
                    }
                }
export default setWheelValue