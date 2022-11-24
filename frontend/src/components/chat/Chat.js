import React from 'react'
import './chat.css';
 import photo from '../../images/addAvatar.png'
import Message from './Messages';

const Chat = (props) => {
  var tempMessages = [
    {
      id: 1,
      isMine: 'true',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 2,
      isMine: 'false',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
    {
      id: 3,
      isMine: 'false',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 4,
      isMine: 'true',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
    {
      id: 5,
      isMine: 'true',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 6,
      isMine: 'true',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
    {
      id: 7,
      isMine: 'false',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 8,
      isMine: 'false',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
    {
      id: 9,
      isMine: 'true',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 10,
      isMine: 'false',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
  ]
  return (
    <div className="message-list">
      Conversation Title
      <div className="message-list-container">{
        tempMessages.map((conversation) =>
          <Message
          key={conversation.id}
          isMine={conversation.isMine}
          time={conversation.timestamp}
          startsSequence={true}
          endsSequence={true}
          showTimestamp={true}
          data={conversation.message}
        />
        )
      }</div>
    </div>
  )
}

export default Chat