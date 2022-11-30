import React, { useEffect } from 'react';
import ConversationList from '../components/chat/ConversationList';
import '../components/chat/Messenger/Messenger.css';
import { fetchChatsApiData} from '../features/chatsApiSlice';
import { useDispatch } from 'react-redux';

export default function ChatRoom () {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchChatsApiData())
    console.log("...")
  },[])
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>
    </div>
    );
}