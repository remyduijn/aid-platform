import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import { fetchChatsApiData ,allChats } from '../../../features/chatsApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import './ConversationList.css';

export default function ConversationList() {
  const chats = useSelector(allChats)
  // const selectedVolunteer = useSelector(selectedVolunteerData)
  // console.log(selectedVolunteer , "selectedVolunteerdata")
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(fetchChatsApiData())
  }, [])
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