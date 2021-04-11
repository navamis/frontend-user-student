
const findProgramScheduled = (payload) =>{
    return {type : "FIND_PROGRAMSCHEDULED",payload}
}

export const fetchProgramSchedules = (programScheduled) => {
    console.log(programScheduled)

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/programScheduled', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findProgramScheduled(data));
            })
        
    }

}
