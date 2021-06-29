import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listDatas } from '../actions/dataList.js';


export default function DataListScreen(props) {
  const dataList = useSelector((state) => state.dataList);
  const { loading, error, datas } = dataList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDatas());
  }, [dispatch]);
  return (
    <div>
      <h1>Datas</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Tên Thiết bị</th>
              <th>Vị Trí</th>
              <th>Ngày</th>
              <th>Giờ đến</th>
              <th>Giờ đi</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item) => (
              <tr key={item._id}>
                <td>{item.Device}</td>
                <td>{item.Location}</td>
                <td>{item.Date}</td>
                <td>{item.Time_Start}</td>
                <td>{item.Time_End}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
