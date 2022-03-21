import React, {useState} from 'react';
import './ChoosePeople.css'

import People from './People';
import CustomChatEngine from '../chat-engine/CustomChatEngine';

const userDetails = [{
        userName : 'tapas',
    },
    {
        userName : 'collab',
    },
    {
        userName : 'tapas2',
    }
]

const ChoosePeople = () => {
    const [user, setUser] = useState('')

    const handleUserSelection = (userName) => {
        setUser(userName)
    }

  return (
    <div className='bg-container d-flex flex-column'>
      {user === '' && (
          userDetails.map((user) => (
            <div className='d-flex flex-column align-items-center'>
                <People userName={user.userName} />
                <button className='btn btn-secondary button mb-3' onClick={() => handleUserSelection(user.userName)}>Select</button>
            </div>
          ))
      )}
      {user !== '' && <CustomChatEngine userName={user}/>}
    </div>
  );
}

export default ChoosePeople;
