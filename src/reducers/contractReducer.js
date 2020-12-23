const initialState = {
  web3: null,
  isAuthenticated: false,
  loading: true,
  type: null,
  Factory: null,
  Personal: null,
  Transplant: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "UPLOAD_CONTRACTS":
      return {
        ...state,
        loading: false,
        web3: payload.web3,
        Factory: payload.Factory,
      };
    case "UPLOAD_TYPE":
      return {
        ...state,
        type: payload.type,
        loading: false,
      };
    case "UPLOAD_PERSONAL":
      return {
        ...state,
        Personal: payload.Personal,
        loading: false,
        isAuthenticated: true,
      };
    case "UPLOAD_TRANSPLANT":
      return {
        ...state,
        Transplant: payload.Transplant,
        loading: false,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}
