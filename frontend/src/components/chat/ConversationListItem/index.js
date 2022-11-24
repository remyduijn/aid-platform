import React, {useEffect, useState} from 'react';
import './ConversationListItem.css';
import photo from '../../../images/user.png'
import {Link} from "react-router-dom";
export default function ConversationListItem(props) {
 
  return (
    <Link to={`/chatrooms/${props.data.id}`}>
      <div className="conversation-list-item" >
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ props.data.requester.name }</h1>
          <p className="conversation-snippet">{ props.data.messages.slice(-1)[0].body }</p>
        </div>
      </div>
    </Link>
  );
}