import axios from 'axios'

export function createHMAC (plainText, algorithm){
    return function(dispatch, getState){
        dispatch(toggleLoder(true));
        
        axios.post('http://localhost:4000/', {plainText, algorithm})
            .then(res => {
                console.log(res.data);
                
                dispatch(toggleLoder(false));
            })
            .catch(err=> {
                
                dispatch(toggleLoder(false));
            });
    };
};

export function toggleLoder(loading){
    return {
        type: 'LOADING',
        loading
    };
}