export const configureBlockchain = ( web3 , DonorFactory  ) => async dispatch => {

    dispatch({ type: "UPLOAD_CONTRACTS" , payload: {web3: web3 , Factory  : DonorFactory  } });


  };
  
//   //register user
  
//   export const register = ({ name, email, password, type }) => async dispatch => {
//     const config = {
//       headers: {
//         'Content-type': 'application/json',
//       },
//     };
  
//     const body = JSON.stringify({ name, email, password, type });
//     try {
//       const res = await axios.post('/api/authin/create', body, config);
//       dispatch({ type: REGISTER_SUCCESS, payload: res.data });
//       dispatch(loadUser());
//     } catch (err) {
//       const errors = err.response.data.errors;
  
//       if (errors) {
//         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//         console.log(errors);
//       }
//       dispatch({ type: REGISTER_FAIL });
//     }
//   };
  
//   //login user
//   export const login = ({ email, password }) => async dispatch => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
  
//     const body = JSON.stringify({ email, password });
//     try {
//       const res = await axios.post('/api/authin', body, config);
  
//       dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  
//       dispatch(loadUser());
//     } catch (err) {
//       console.log(err.data);
//       const errors = err.errors;
//       if (errors) {
//         console.log(errors);
//         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//       }
//       dispatch({ type: LOGIN_FAIL });
//     }
//   };
  
//   export const getallusers = () => async dispatch => {
//     try {
//       const res = await axios.get(`/api/user/allusers`);
//       dispatch({ type: GET_ALL_USERS, payload: res.data });
//     } catch (err) {
//       // dispatch({
//       //   type: PROFILE_ERROR,
//       //   payload: { msg: err.response.statusText, status: err.response.status },
//       // });
//       console.log(err);
//     }
//   };
  
//   //logout user
//   export const logout = () => dispatch => {
//     // dispatch({ type: CLEAR_PROFILE });
//     dispatch({ type: LOGOUT });
//   };
  