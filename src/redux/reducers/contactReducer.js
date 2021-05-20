import * as constants from "../constants";

export const initialState = {
  data: [],
  loading: false,
  hasError: false,
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_CONSTANTS:
      return { ...state, loading: true, hasError: false };
    case constants.GET_CONTACTS_SUCCESS:
      return {
        data: [...state.data, ...action.payload],
        loading: false,
        hasError: false,
      };
    case constants.GET_CONTACTS_FAILURE:
      return { ...state, loading: false, hasError: true };
    case constants.RESET_CONTACTS:
      return initialState;
    default:
      return state;
  }
};
