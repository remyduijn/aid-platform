import React from 'react'
import './chat.css';
 import photo from '../../images/addAvatar.png'

const SingleChat = (props) => {
  const { id, name, text } = props.data;
  return (
    <div className="conversation-list-item" id={id}>
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet">{ text }</p>
        </div>
      </div>
  )
}

export default SingleChat