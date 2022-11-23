import React from 'react'
import Chat from '../components/chat/Chat';
import ChatList from '../components/chat/ChatList';

const ChatRoom = () => {
  return (
    <div>
    <div className="scrollable sidebar">
      <ChatList />
    </div>
      <Chat />
    </div>
      
  )
}

export default ChatRoom