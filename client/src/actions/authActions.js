import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../utils/setAuthToken';

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then((res) => history.push('/login'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Login user
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('/api/users/login', userData)
    .then((res) => {
      //save the token to the local storage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);

      //set the token to the auth header
      setAuthToken(token);

      //Decode the token
      const decoded = jwt_decode(token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded,
      });
    })

    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//logout user
export const logoutUser = () => dispatch => {
  
  //remove from localstorage
  localStorage.removeItem('jwtToken');

  //remove auth header
  setAuthToken(false);

  //clear out user data from redux store
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  })

}