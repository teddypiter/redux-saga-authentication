import * as types from '../actions/index';

const reducer = (state = [], action) => {
     const response = action.response;

     switch (action.type) {
          case types.LOGIN_USER_SUCCESS:
               return { ...state, response };
          case types.LOGIN_USER_ERROR:
               return { ...state, response };  
          case types.REGISTER_USER_SUCCESS:
               return { ...state, response };
          case types.REGISTER_USER_ERROR:
               return { ...state, response };   
          default: 
               return state;
     }
 };
 export default reducer;

