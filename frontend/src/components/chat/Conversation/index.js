import React, {useEffect, useState} from 'react';
import './Conversation.css';
import photo from '../../../images/user.png'
import ConversationList from '../Conversation';
import MessageList from '../MessageList';
export default function Conversation() {
  
  
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>

      <div className="scrollable content">
        <MessageList />
      </div>
    </div>
  );
}