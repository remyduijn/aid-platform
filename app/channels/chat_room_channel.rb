class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    stop_stream_from params[:room]
    stream_from params[:room]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    # stop_all_streams
    stop_stream_from params[:room]
  end
end
