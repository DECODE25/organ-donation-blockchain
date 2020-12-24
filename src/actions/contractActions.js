export const configureBlockchain = (web3, DonorFactory) => async (dispatch) => {
  dispatch({
    type: "UPLOAD_CONTRACTS",
    payload: { web3: web3, Factory: DonorFactory },
  });
};

export const setTypeOfUser = (user) => {
  return {
    type: "UPLOAD_TYPE",
    payload: { type: user },
  };
};

export const setAuthentication = (Personal) => {
  return {
    type: "UPLOAD_PERSONAL",
    payload: { Personal: Personal },
  };
};
