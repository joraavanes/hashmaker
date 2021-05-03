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
        case 'LOADING':
            return{
                ...state,
                loading: action.loading
            }        
        default:
            return state;
        
    }
};