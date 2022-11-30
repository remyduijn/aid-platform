import React, { useEffect, useState } from 'react';
import './Conversation.css';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import { useDispatch, useSelector } from 'react-redux';
import actionCable from 'actioncable'
import { currentConversation } from '../../../features/chatsApiSlice';
import { fetchChatsApiData ,allChats } from '../../../features/chatsApiSlice';

export default function Conversation() {
  const currentConversationData = useSelector(currentConversation)
  const CableApp = {}
  CableApp.cable = actionCable.createConsumer('ws://localhost:3001/cable')

  const cable = CableApp.cable;
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchChatsApiData())
    if (currentConversationData?.id) {
      cable.subscriptions.create
      (
        {
          channel: 'ChatRoomChannel',
          id: currentConversationData?.id,
        },
        {connected: () =>  {
          // Called when the subscription is ready for use on the server
          console.log("connected")
        }},
        {
          received: (message) => {
            debugger
            console.log(message)
            // setMessages([...messages, message])
          }
        }
      )
    }
  },[currentConversationData])
  
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