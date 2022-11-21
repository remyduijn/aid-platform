class ChatroomsController < ApplicationController

  def index
    @chatrooms = Chatroom.where("volunteer_id = ? OR requester_id = ?",  @current_user.id, @current_user.id).all
    render json: {requests: @chatrooms, include: [:volunteer, :requester, :messages] status: ok}
  end

  def create
    @chatroom = Chatroom.new(chat_room_params)
    @chatroom.user_id = @current_user.id
    if @chatroom.save
      render json: {request: @chatroom, status: ok}
    else
      render json: {errors: @chatroom.errors.full_messages, status: 409}
    end
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:volunteer_id, :requester_id, :community_request_id)
  end
end