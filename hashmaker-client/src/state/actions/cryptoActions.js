import axios from 'axios'

export function createHMAC (str, algorithm){
    return function(dispatch, getState){
        dispatch(toggleLoder(true));
        
        axios.post('http://localhost:4000/hash', {str, algorithm})
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