const LoginReducer = (state={}, action) => {
    switch(action.type){
        case "LOGIN":
            return({...state, id: action.payload})
        default:
            return(state)
    }
    
}

export default LoginReducer;