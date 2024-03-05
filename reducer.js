export const initialState = {
    userName: '',
    info: [],
}

export const reducer = (state, action) => {
    switch(action?.type) {
        case 'SET_USERNAME': 
        return {
            ...state,
            userName: action?.payload,
        }

        case 'SET_INFO': 
        return {
            ...state,
            info: action?.payload,
        }
    }
}

export const setName = (payload) => ({
    type: 'SET_USERNAME',
    payload,
}) 

export const setInfo = (payload) => ({
    type: 'SET_INFO',
    payload,
})