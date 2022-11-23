import React from 'react'
import '../../style.scss';
import SingleChat from './SingleChat'; 

const ChatList = () => {
  const chats = [
    {
      id: 1,
      name: "Requester1",
      text: "hello how may i help you?"
    },
    {
      id: 2,
      name: "Requester2",
      text: "hello how may i help you?"
    },
    {
      id: 3,
      name: "Requester3",
      text: "hello how may i help you?"
    },
    {
      id: 4,
      name: "Requester4",
      text: "hello how may i help you?"
    }
  ]
  return (
    <div className="conversation-list card">
        {
          chats.map(conversation =>
            <SingleChat
              key={conversation.id}
              data={conversation}
            />
          )
        }
      </div>
  )
}

export default ChatList