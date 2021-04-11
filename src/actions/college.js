



const findCollege = (payload) =>{
    return {type : "FIND_COLLEGE",payload}
}

export const fetchCollege = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
     
    return dispatch => {
        fetch('http://localhost:8075/collegeview', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findCollege(data));
            })
        
    }

}

