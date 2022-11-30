import React, { useState } from 'react';
import './Compose.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch, useSelector } from 'react-redux';
import { createCurrentChatMessagesApi } from '../../../features/chatRoomMessagesSlice';
import { currentConversation } from '../../../features/chatsApiSlice';
const user=localStorage.getItem('user')

export default function Compose(props) {
  const [messageBody , setMessageBody] = useState()
  const currentConversationData = useSelector(currentConversation)
  const dispatch = useDispatch()
  const sendMessage = () => {
    const message = {
      sender_id: user,
      receiver_id: currentConversationData?.requester?.id == user ? currentConversationData?.volunteer?.id : currentConversationData?.requester?.id,
      chat_room_id: currentConversationData?.id,
      body: messageBody
    }
    setMessageBody('')
    dispatch(createCurrentChatMessagesApi(message))
    setMessageBody("")
  }
  return (
    <>
      <div class="input-group mb-1 compose w-100 position-fixed">
        <input
          type="text"
          className="compose-input form-control"
          placeholder="Type a message, @name"
          aria-describedby="button-addon2"
          aria-label="Recipient's username"
          onChange={(e) => setMessageBody(e.target.value)}
          value={messageBody}
        />
        <button className="btn btn-primary" type="button" id="button-addon2" onClick={()=> sendMessage()}> 
        <i className="bi bi-send" ></i>
        </button>
      </div>
    </>
  );
}