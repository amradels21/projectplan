const initialState = {
    authError: null
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Logged in ..');
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signed out ..');
            return state;
        default:
            return state;
    }
}

export default authReducer;