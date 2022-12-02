import React, { useEffect } from 'react';
import './Conversation.css';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { currentVolunteerData, fetchChatsApiData, setCurrentConversation } from '../../../features/chatsApiSlice';
import Navigation from '../../Navbar';
export default function Conversation() {
  const dispatch = useDispatch()
  const params = useParams()
  const currentVolunteer = useSelector(currentVolunteerData)
  if(params.id == currentVolunteer.id){
    dispatch(setCurrentConversation(currentVolunteer))
  }

  useEffect(() => {
    dispatch(fetchChatsApiData())
  }, [])

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