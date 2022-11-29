import React from 'react';
import ConversationList from '../components/chat/ConversationList';
import '../components/chat/Messenger/Messenger.css';

export default function ChatRoom () {
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>
    </div>
    );
}