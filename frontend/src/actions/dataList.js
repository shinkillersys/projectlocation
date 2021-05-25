import Axios from 'axios';
import{
    DATA_LIST_REQUEST,
    DATA_LIST_SUCCESS,
    DATA_LIST_FAIL,
}from '../constants/dataconstants';

export const listDatas = () => async (dispatch, getState) => {
    dispatch({ type: DATA_LIST_REQUEST });
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      const { data } = await Axios.get('/api/datas/listData', {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: DATA_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DATA_LIST_FAIL, payload: message });
    }
  };