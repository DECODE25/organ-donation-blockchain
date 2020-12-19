export const configureBlockchain = ( web3 , DonorFactory  ) => async dispatch => {

    dispatch({ type: "UPLOAD_CONTRACTS" , payload: {web3: web3 , Factory  : DonorFactory  } });


};