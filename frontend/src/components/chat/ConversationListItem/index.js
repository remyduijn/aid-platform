import React, {useEffect, useState} from 'react';
import './ConversationListItem.css';
import { useDispatch , useSelector } from 'react-redux';
import photo from '../../../images/user.png'
import {Link} from "react-router-dom";
import {setCurrentConversation} from "../../../features/chatsApiSlice"

export default function ConversationListItem(props) {
  const disptach = useDispatch()
  console.log(props , "ConversationListItem")

  const getCurrentConversation = () => {
     console.log(props.data , "props.data" , props.data)
     disptach(setCurrentConversation(props.data))
  }
  return (
    <Link to={`/chatrooms/${props.data.id}`} onClick={() => getCurrentConversation()}>
      <div className="conversation-list-item" >
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ props.data.requester.name }</h1>
          <p className="conversation-snippet">{ props.data.messages.length ? props.data.messages.slice(-1)[0].body : ""}</p>
        </div>
      </div>
    </Link>
  );
}