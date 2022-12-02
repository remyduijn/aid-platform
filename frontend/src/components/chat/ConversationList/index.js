import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import { allChats, currentConversation } from '../../../features/chatsApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import './ConversationList.css';
import { currentChatMessageData } from '../../../features/chatRoomMessagesSlice';
import { useParams } from 'react-router-dom';

export default function ConversationList() {
  const chats = useSelector(allChats)
  const currentChatMessages = useSelector(currentChatMessageData)
  const currentConversationData = useSelector(currentConversation)
  const [updatedData, setUpdatedData] = useState(chats)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    setUpdatedData(chats)
  })

  useEffect(() => {
    console.log(updatedData, "updatedData")
    // const x = updatedData.filter((updatedData)=>updatedData.id === params.id)
    const result = updatedData.filter((word) => {
      return word.id == params.id
    });
    // setUpdatedData((prev) => {
    //   return [
    //     ...prev ,
    //     updatedData.filter(word => word.id == params.id).messages
    //   ]
    // })
    setUpdatedData((prev)=>{
      if(result){
        return [
          ...prev ,
          result
        ]
      }
    })
    
    console.log("currentChatMessages", currentChatMessages, "currentConversationData", currentConversationData)
  }, [currentChatMessages])

  console.log(chats, "chats of conversationList")
  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[
          <ToolbarButton key="cog" icon="ion-ios-cog" />
        ]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
        ]}
      />
      <ConversationSearch />
      {
        chats?.map(conversation =>
          <ConversationListItem
            key={conversation.id}
            data={conversation}
          />
        )
      }
    </div>
  );
}