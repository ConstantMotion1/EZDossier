
import React from 'react';    
import 'antd/dist/reset.css';
import './App.css';
// import { Breadcrumb, Layout, Menu } from 'antd';
import Login from './pages/Login';
// const { Header, Content, Footer } = Layout;


 function Testing() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Login />
      

  );
};

export default Testing;
