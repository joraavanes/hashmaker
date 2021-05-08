import axios from 'axios'

export function createHMAC (str, algorithm){
    return function(dispatch, getState){
        dispatch(toggleLoader(true));
        
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
                dispatch(toggleLoader(false));
            })
            .catch(err=> {
                
                dispatch(toggleLoader(false));
            });
    };
};

export function pbkdf2(password, iterations, keylen, algorithm){
    return async function(dispatch, getState){
        dispatch(toggleLoader(true));

        try {
            const res = await axios.post('http://localhost:4000/pbkdf2', {password, iterations, keylen, algorithm});
            const {pbkdf2Password, salt} = res.data;
            dispatch({
                type: 'PBKDF2',
                pbkdf2:{
                    pbkdf2Password,
                    salt
                }
            });

            dispatch(toggleLoader(false));
        } catch (err) {
            dispatch(toggleLoader(false));
        }

    };
};

export function encrypt(){
    return async function(dispatch, getState){
        dispatch(toggleLoader(true));

        try {
            const {encryptedData, key, iv} = await axios.post('http://localhost:4000/encrypt', {});
            dispatch({
                type: 'ENCRYPT',
                encrypt: {
                    encryptedData,
                    key,
                    iv
                }
            });

            dispatch(toggleLoader(false));
        } catch (err) {
            dispatch(toggleLoader(false));
        }
    }
};

export function clearAll(){
    return {
        type: 'CLEAR_ALL'
    };
};

export function toggleLoader(loading){
    return {
        type: 'LOADING',
        loading
    };
}