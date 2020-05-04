import axios from 'axios';

const REGISTER_USER ='REGISTER_USER'
const SIGNIN_USER = 'SIGNIN_USER'
const SIGNOUT_USER = 'SIGNOUT_USER'

const initialState = {
    data: null,
    loading: false
}

export default function(state = initialState, action) {
    let {type, payload} = action

    switch(type) {
        case REGISTER_USER + '_PENDING':
            return {
                ...state,
                loading: true 
            }
        
        case REGISTER_USER + '_FULFILLED':
            return {
                ...state, 
                data: payload.data,
                loading: false
            }
        
        case REGISTER_USER + '_REJECTED':
            return {
                ...state, 
                loading: false 
            }
        
        case SIGNIN_USER + '_PENDING':
            return {
                ...state, 
                loading: true 
            }

        case SIGNIN_USER + '_FULFILLED':
            return {
                ...state, 
                data: payload.data,
                loading: false 
            }

        case SIGNIN_USER + '_REJECTED':
            return {
                ...state, 
                loading: false 
            }    

        case SIGNOUT_USER + '_PENDING':
            return { 
                ...state, 
                loading: true 
            }

        case SIGNOUT_USER + '_FULFILLED':
            return {
                ...state, 
                data: null,
                loading: false 
            }

        case SIGNOUT_USER + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        default: 
            return state
    }
}


////ACTION CREATORS/////
export function register(userInfo) {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', userInfo)
    }
}

export function signin(userInfo) {
    return {
        type: SIGNIN_USER,
        payload: axios.post('/auth/signin', userInfo)
    }
}

export function signout() {
    return {
        type: SIGNOUT_USER,
        payload: axios.delete('/auth/signout')
    }
}