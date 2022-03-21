import React from 'react';
import {ChatEngine} from 'react-chat-engine'

const CustomChatEngine = ({userName}) => {
  return (
    <ChatEngine
      height='100vh'
      projectID='f33ddf37-5673-49f2-b19b-a0d8771553b5'
      userName={userName}
      userSecret='secret'
    />
  );
}

export default CustomChatEngine;
