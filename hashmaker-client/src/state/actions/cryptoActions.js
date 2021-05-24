import axios from 'axios'

const url = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:4000';

export function createHMAC (str, algorithm){
    return function(dispatch, getState){
        dispatch(toggleLoader(true));
        
        axios.post(`${url}/hash`, {str, algorithm})
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
            const res = await axios.post(`${url}/pbkdf2`, {password, iterations, keylen, algorithm});
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

export function encrypt(algorithm, keyPassword, data){
    return async function(dispatch, getState){
        dispatch(toggleLoader(true));

        try {
            const res = await axios.post(`${url}/cipheriv`, {algorithm, keyPassword, data});
            const {encryptedData, key, iv} = res.data
            
            dispatch({
                type: 'ENCRYPT',
                encrypt: {
                    encryptedData,
                    key,
                    iv,
                    algorithm
                }
            });

            dispatch(toggleLoader(false));
        } catch (err) {
            dispatch(toggleLoader(false));
        }
    }
};

export function decrypt(algorithm, key, iv, encryptedData){
    return async function(dispatch, getState){
        dispatch(toggleLoader(true));

        try {
            const res = await axios.post(`${url}/decipheriv`, {algorithm, key, iv, encryptedData});
            const { decryptedData } = res.data;

            dispatch({
                type: 'DECRYPT',
                decrypt:{
                    decryptedData,
                    key,
                    iv
                }
            });
            dispatch(toggleLoader(false));
        } catch (err) {
            dispatch(toggleLoader(false));
        }
    };
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