import {
    DATA_LIST_FAIL,
    DATA_LIST_REQUEST,
    DATA_LIST_SUCCESS,
} from '../constants/dataconstants.js';

export const dataListReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case DATA_LIST_REQUEST:
        return { loading: true };
      case DATA_LIST_SUCCESS:
        return { loading: false, datas: action.payload };
      case DATA_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };