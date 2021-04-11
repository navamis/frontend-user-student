
const findBranch = (payload) =>{
   return {type : "FIND_BRANCH",payload}
}

export const fetchBranches = () => {

   const requestOptions = {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' }
   };
   return dispatch => {
       fetch('http://localhost:8075/branches', requestOptions)
           .then(res => {
               console.log(res);
               return res.json();
           })
           .then(data => {
               console.log(data);
               dispatch(findBranch(data));
           })
       
   }

}



