const initialState = {
  payments: [],
  logins: [],
  users: [],
  colleges:[],
  addresses :[],
  courses : [],
  branches:[],
  programs:[],
  applications: [],
  data: null,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {

      
    case "FIND_PAYMENTS":
      return { ...state, payments: payload, message: "" };    

    case "FIND_PAYMENT":
      return { ...state, payments: payload, updatePayment: payload.payment };

    case "ADD_PAYMENT":
      return { ...state, payments: state.payments, message: payload.message };

   


    case "FIND_USERS" :
        return {...state, users : payload,message:''}

    case "FIND_USER" :
        return {...state, users : payload,updateUser : payload.user}

    case "ADD_USER":
        return {...state, users: state.users,message:payload.message}

   

     
    case "ADD_LOGIN":
        return {...state, logins: state.users,message:payload.message}

    

    case "CHANGE_PASSWORD":
      return { ...state, message: payload.message};   
               
                
                  
              case "FIND_COLLEGE" :
                  return {...state,colleges : payload,message:''}
          
                 
          
                              
                    case "FIND_ADDRESS" :
                        return {addresses : payload,message:''}
                
                        
                              
                  case "FIND_COURSES" :
                    return {...state, courses : payload,message:''}
            
                case "FIND_COURSE" :
                        return {...state, courses : payload,updateCourse : payload.course}
            
               
                case "FIND_BRANCHES" :
                    return {...state, branches : payload,message:''}
                case "FIND_BRANCH" :
                    return {...state, branches : payload,updateBranch : payload.branch}
                                
               
                case "FIND_PROGRAMS" :
                    return {...state, programs : payload,message:''}
            
                case "FIND_PROGRAM" :
                    return {...state, programs : payload,updateProgram : payload.program}
                        
                                    
               
                        case "FIND_PROGRAMSCHEDULES" :
                            return {...state, programSchedules : payload,message:''}
                    
                        case "FIND_PROGRAMSCHEDULED" :
                            return {...state, programSchedules : payload,updateProgramScheduled : payload.programScheduled}
                                
                                    // case "FIND_USER" :
                                    //         return {users : payload,updateUser : payload.user}
                                
                      
                        
             
    case "FIND_UNIVERSITY" :
        console.log("fetchin.....")
            return {...state, universitys : payload}

  

    case "ADD_APPLICATION":
        return { ...state, data: payload };
  
    case "All_APPLICATIONS":
      return {...state, applications: payload}
  
      case "DELETE_APPLICATION":
        return { ...state, data: payload };
  
      case "UPDATE_APPLICATION":
        return { ...state, data: payload };
  





    default:
      return state;
  }
};

export default reducer;



