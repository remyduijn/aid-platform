import React, {useEffect, useState} from 'react';
import './ConversationListItem.css';
import { useDispatch , useSelector } from 'react-redux';
import photo from '../../../images/user.png'
import {Link} from "react-router-dom";
import {setCurrentConversation} from "../../../features/chatsApiSlice"
import { currentChatMessagesData } from '../../../features/chatRoomMessagesSlice';

export default function ConversationListItem(props) {
  const disptach = useDispatch()
  console.log(props , "ConversationListItem")
  const currentChatMessages =  useSelector(currentChatMessagesData)
  console.log(currentChatMessages , "currentChatMessages.. profile")
  console.log(props.data , "props.data")

  const getCurrentConversation = () => {
     disptach(setCurrentConversation(props.data))
  }
  return (
    <Link to={`/chatrooms/${props.data.id}`} onClick={() => getCurrentConversation()}>
      <div className="conversation-list-item" >
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ props.data.requester.name }</h1>
          <p className="conversation-snippet">{ props.data.messages.length ? props.data.messages[props.data.messages.length -1].body : ""}</p>
        </div>
      </div>
    </Link>
  );
}