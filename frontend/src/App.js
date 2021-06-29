import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import DataListScreen from './screens/DataScreen';
import Search from './screens/Search';
// import LoadingBox from './components/LoadingBox';
// import MessageBox from './components/MessageBox';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Manage
            </Link>
          </div>
          <div>
          </div>
          <div>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/listData">Datas</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/listData">Datas</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
 
        <main>
	<div className="row center">
	<h1> Hệ Thống Định Vị Sinh Viên Ứng Dụng Tại Trường Đại Học Công Nghiệp Thành Phố Hồ Chí Minh</h1></div>
          <Route path="/signin" component={SigninScreen}></Route>
          {/* <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route> */}
          <Route path="/register" component={RegisterScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>

          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <Route path="/listData" component={DataListScreen}></Route>
          {/* <Route path="/" component={Search}></Route> */}
        </main>
        <footer className="row center">
          <div>Nguyễn Trường Thịnh - 17057881 <br></br>Dương Thế Tài - 17011171</div>{' '}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
