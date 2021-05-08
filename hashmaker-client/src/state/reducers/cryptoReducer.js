/* eslint-disable import/no-anonymous-default-export */

const cryptoDefaultState = {
    loading: false,
    hmac: {},
    pbkdf2: {},
    encrypt: {},
    decrypt: {}
};

export default function(state = cryptoDefaultState, action){
    switch(action.type){
        case 'HMAC':
            return{
                ...state,
                hmac: action.hmac,
                loading: action.loading
            };
        case 'PBKDF2':
            return{
                ...state,
                pbkdf2: action.pbkdf2
            };
        case 'ENCRYPT':
            return{
                ...state,
                encrypt:action.encrypt
            };
        case 'CLEAR_ALL':
            return{
                ...state,
                hmac:{},
                pbkdf2: {},
                encrypt: {},
                decrypt: {}
            };
        case 'LOADING':
            return{
                ...state,
                loading: action.loading
            };
        default:
            return state;
        
    }
};