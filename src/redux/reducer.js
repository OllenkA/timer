export const PAUSE = 'PAUSE';
export const START = 'START';
export const START_IS = 'START-IS';
export const FINISH = 'FINISH';


const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: 'START',
    statusPause: 'PAUSE',
    timer: 0,
}


export const runTC = () => (dispatch, getState) => { 
    let timer = setInterval(() => {
        dispatch(start(timer))
    }, 1000);
}

export const finishTC = () => (dispatch, getState) => { 
    clearInterval(getState().timer)
    dispatch(finish());
}

export const pauseTC = () => (dispatch, getState) => {
    clearInterval(getState().timer)
    dispatch(pause())
}

export const startIsTC = () => (dispatch) => {
    let timer = setInterval(() => {
        dispatch(startIs(timer))
    }, 1000);
    
}
    

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FINISH:
            return {
                ...state,
                seconds: state.seconds = 0,
                minutes: state.minutes = 0,
                hours: state.hours = 0,
                status: state.status = 'START'
            }
        case START:
            if (state.seconds >= 59 ) {
                return {
                    ...state,
                    seconds: state.seconds = 0,
                    minutes: state.minutes + 1,
                    timer: action.timer
                }
            } else if(state.minutes >= 59) {
                   return {
                       ...state,
                       minutes: state.minutes = 0,
                       hours: state.hours + 1,
                       timer: action.timer
                   }
            } else{
            return {
                ...state,
                seconds: state.seconds = state.seconds + 1,
                status: state.status = 'STOP',
                timer: action.timer
            }
            }
        case PAUSE:
            return {
                ...state,
                seconds: state.seconds,
                statusPause: state.statusPause = 'START',
                // status: state.status = 'STOP',
                
            }
        case START_IS:
            if (state.seconds >= 59) {
                return {
                    ...state,
                    seconds: state.seconds = 0,
                    minutes: state.minutes + 1,
                    timer: action.timer
                }
            } else if(state.minutes >= 59) {
                return {
                    ...state,
                    minutes: state.minutes = 0,
                    hours: state.hours + 1,
                    timer: action.timer
                }
         } else {
                return {
                    ...state,
                    seconds: state.seconds = state.seconds + 1,
                    statusPause: state.statusPause = 'PAUSE',
                    timer: action.timer
                    // status: state.status = 'STOP',

                }
            }
            default:
            return state;
        }
};

export const pause = () => ({type: PAUSE});
export const start = (timer) => ({type: START, timer});
export const startIs = (timer) => ({type: START_IS, timer});
export const finish = () => ({type: FINISH});

export default reducer;