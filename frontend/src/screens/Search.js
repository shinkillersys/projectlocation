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
              <th>Thiet Bi</th>
              <th>Vi Tri</th>
              <th>Ngay</th>
              <th>Gio Den</th>
              <th>Gio Di</th>
            </tr>
          </thead>
      
          <tbody>
            {datas.map((item) => (
              <tr key={item._id}>
                <td>{item.thietbi}</td>
                <td>{item.vitri}</td>
                <td>{item.ngay}</td>
                <td>{item.gioden}</td>
                <td>{item.giodi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
}
