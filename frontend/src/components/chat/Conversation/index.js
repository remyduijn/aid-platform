import React, { useEffect, useState } from 'react';
import './Conversation.css';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatsApiData, currentConversation} from '../../../features/chatsApiSlice';
export default function Conversation() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchChatsApiData())
    console.log("...")
  },[])
  
  return (
    <>
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>
      <div className="scrollable content position-relative">
        <MessageList />
      </div>
    </div>
    </>

    
  );
}