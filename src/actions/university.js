

const findUniversity = (payload) =>{
    return {type : "FIND_UNIVERSITY",payload}
}

export const fetchUniversity = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/viewAllUniversity', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findUniversity(data));
            })
        
    }

}
