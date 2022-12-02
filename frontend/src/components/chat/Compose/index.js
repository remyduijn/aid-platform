import React, { useState } from 'react';
import './Compose.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch, useSelector } from 'react-redux';
import { createCurrentChatMessageApi } from '../../../features/chatRoomMessagesSlice';
import { currentConversation, setCurrentConversation, setMessages, chatMessages } from '../../../features/chatsApiSlice';
import Cookies from 'js-cookie'
const user = Cookies.get('user')

export default function Compose(props) {
  const [messageBody, setMessageBody] = useState()
  const currentConversationData = useSelector(currentConversation)
  const chatMessage = useSelector(chatMessages)
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (chatMessage == undefined || chatMessage?.length == 0) {
    dispatch(setMessages(currentConversationData.messages))
    }
  },[currentConversationData])
  const sendMessage = () => {
    if (messageBody == '') {
      return
    }
    const message = {
      sender_id: user,
      receiver_id: currentConversationData?.requester?.id == user ? currentConversationData?.volunteer?.id : currentConversationData?.requester?.id,
      chat_room_id: currentConversationData?.id,
      body: messageBody
    }
    let chat = currentConversationData;
    let aarrr = [...chatMessage, message]

    dispatch(setMessages(aarrr))
    let testingData = { ...chat, messages: [...chat.messages, message]}
    dispatch(createCurrentChatMessageApi(message))
    setMessageBody("")
  }
  const sendMessageOnPressEnterKey = (event) => {
    if (event.keyCode === 13) {
      sendMessage()
    }
  }
  return (
    <>
      <div className="input-group mb-1 compose w-100 position-sticky">
        <input
          type="text"
          className="compose-input form-control"
          placeholder="Type a message, @name"
          aria-describedby="button-addon2"
          aria-label="Recipient's username"
          onChange={(e) => setMessageBody(e.target.value)}
          onKeyDown={(e) => sendMessageOnPressEnterKey(e)}
          value={messageBody}
        />
        <button class="btn btn-primary" type="button" id="button-addon2"
          onClick={() => sendMessage()}
        >
          <i class="bi bi-send" ></i>
        </button>
      </div>
    </>
  );
}