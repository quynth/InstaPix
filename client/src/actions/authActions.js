import { GET_ERRORS, SET_USER } from './types'
import axios from 'axios';

// Register User
export const registerUser = (userData, history) => dispatch => {
 axios
     .post('/api/users/register', userData)
     .then(res => history.push('/login'))
     .catch(err => 
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data
        }));
};

//Login user
export const loginUser = userData => dispatch => {
  axios
  .post('/api/users/login', userData)
  .then(res => {
    //save the token to the local storage
    const {token} = res.data.token;
    localStorage.setItem('jwtToken',token);
    //set the token to the auth header
   })
  .catch(err => 
   dispatch({
     type:GET_ERRORS,
     payload: err.response.data
     }));

}