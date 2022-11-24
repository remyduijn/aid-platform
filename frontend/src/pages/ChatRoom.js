import React, {useState, useEffect} from 'react';
import Chat from '../components/chat/Chat';
import ChatList from '../components/chat/ChatList';
import ConversationList from '../components/chat/ConversationList';
import MessageList from '../components/chat/MessageList';
import '../components/chat/Messenger/Messenger.css';
import axios from 'axios';

export default function ChatRoom () {
  
  const [chats, setChats] = useState([]);
  
 const getConversations = () => {
    axios.get("http://localhost:3001/chat_rooms").then(response => {
      setChats(response.data)
    });
  }
useEffect(() => {
    getConversations()
  },[])

  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList data={chats}/>
      </div>
    </div>
    );
}