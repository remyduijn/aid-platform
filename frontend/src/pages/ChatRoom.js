import React, { useEffect } from 'react';
import ConversationList from '../components/chat/ConversationList';
import '../components/chat/Messenger/Messenger.css';

export default function ChatRoom () {
  useEffect(()=>{
    console.log("chatroom")
  })
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>
    </div>
    );
}