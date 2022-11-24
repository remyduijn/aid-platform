class ChatRoomsController < ApplicationController

  def index
    @chatrooms = ChatRoom.all
    @chatrooms = @chatrooms.by_logged_in_user(@current_user.id) if @current_user.present?
    render json: @chatrooms, include: [:volunteer, :requester, :messages], status: 200
  end

  def create
    @chatroom               = ChatRoom.new(chat_room_params)
    @chatroom.volunteer_id  = @current_user.id

    if @chatroom.save
      render json: {request: @chatroom, status: ok}
    else
      render json: {errors: @chatroom.errors.full_messages, status: 409}
    end
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:requester_id, :community_request_id)
  end
end