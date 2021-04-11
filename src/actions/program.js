const findProgram = (payload) =>{
    return {type : "FIND_PROGRAM",payload}
}

export const fetchPrograms = (program) => {
    console.log(program)

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/programs', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findProgram(data));
            })
        
    }

}
