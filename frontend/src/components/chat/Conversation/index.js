import React, { useEffect, useState } from 'react';
import './Conversation.css';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import { useDispatch, useSelector } from 'react-redux';
import { currentChatMessageData } from '../../../features/chatRoomMessagesSlice';
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom';
import {currentConversation, setCurrentConversationMessages, currentVolunteerData, fetchChatsApiData, setCurrentConversation } from '../../../features/chatsApiSlice';
import Navigation from '../../Navbar';
import actionCable from 'actioncable'
const user=Cookies.get('user')

export default function Conversation() {

  const [messages, setMessages] = useState([])
  const currentChatMessages = useSelector(currentChatMessageData)
  const currentConversationData = useSelector(currentConversation)
  const dispatch = useDispatch()
  const params = useParams()
  const currentVolunteer = useSelector(currentVolunteerData)
  if(params.id == currentVolunteer.id){
    dispatch(setCurrentConversation(currentVolunteer))
  }
  function createSocket() {

    const consumer = actionCable.createConsumer(`ws://${window.location.hostname}:3001/cable`)
    const subscription = consumer.subscriptions.create(
      {
        channel: 'ChatRoomChannel',
        room: currentConversationData.chat_room_name
      },
      {
        received: (message) => {
          if (message.sender_id != user){
            dispatch(setCurrentConversationMessages(message))
          }
        }
      }
    )

  }

  useEffect(()=>{
    dispatch(fetchChatsApiData())
    if (currentConversationData?.id) {
      createSocket()
    }
  },[currentConversationData])
  
  return (
    <>
    <Navigation/>
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