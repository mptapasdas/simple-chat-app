import { UserOutlined } from '@ant-design/icons';
import React from 'react';

const People = ({ userName }) => {
  return (
    <div className='d-flex flex-row justify-content-center people-container'>
      <UserOutlined/>
      {userName}
    </div>
  );
}

export default People;
