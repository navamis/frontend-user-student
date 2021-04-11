

const findCourse = (payload) =>{
    return {type : "FIND_COURSE",payload}
}

export const fetchCourses = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/courses', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findCourse(data));
            })
        
    }

}
