import axios from 'axios'

export function createHMAC (str, algorithm){
    return function(dispatch, getState){
        dispatch(toggleLoder(true));
        
        axios.post('http://localhost:4000/hash', {str, algorithm})
            .then(res => {
                const {hash, algorithm, plainText} = res.data;
                dispatch({
                    type: 'HMAC',
                    hmac:{
                        hash,
                        algorithm,
                        plainText
                    }
                });
                dispatch(toggleLoder(false));
            })
            .catch(err=> {
                
                dispatch(toggleLoder(false));
            });
    };
};

export function clearAll(){
    return {
        type: 'CLEAR_ALL'
    };
};

export function toggleLoder(loading){
    return {
        type: 'LOADING',
        loading
    };
}