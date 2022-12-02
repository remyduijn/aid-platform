class ChatRoomsController < ApplicationController
  include CurrentUserConcern
  
  def index
    @chatrooms = ChatRoom.all
    @chatrooms = @chatrooms.by_logged_in_user(@current_user.id) if @current_user.present?
    render json: @chatrooms, include: [:volunteer, :requester, :messages], status: 200
  end

  def create
    @chatroom = ChatRoom.user_chats(@current_user.id, chat_room_params[:requester_id], chat_room_params[:community_request_id]) if @current_user.present?
  
    if @chatroom.save
      render json: @chatroom, status: 200
    else
      render json: {errors: @chatroom.errors.full_messages, status: 409}
    end
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:requester_id, :community_request_id)
  end
end