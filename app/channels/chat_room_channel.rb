class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    room = ChatRoom.find(params[:id])
    stream_from "ChatRoomChannel#{room.id}" if room.present?
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
