import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { ExperimentOutlined, StarOutlined } from '@ant-design/icons';

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  const items = [
    {
      key: '/',
      icon: <ExperimentOutlined />,
      label: <Link to="/">Assignment 1 (Basic)</Link>
    },
    {
      key: '/assignment2',
      icon: <StarOutlined />,
      label: <Link to="/assignment2">Assignment 2 (Advanced)</Link>
    }
  ];

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[currentPath]}
      items={items}
      style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#001529',
      }}
      theme="dark"
    />
  );
}

export default Navigation;