class MessagesController < ApplicationController

  before_action :set_char_room, only: %i[creat]

  def create
    @message = @chat_room.messages.new(message_params)
    if @message.save
      render json: {request: @message, status: ok}
    else
      render json: {errors: @message.errors.full_messages, status: 409}
    end
  end

  private

  def message_params
    params.require(:message).permit(:sender_id, :receiver_id, :body)
  end

  def set_char_room
    @chat_room = ChatRoom.find_by_id(params[:chat_room_id])
    render json: {errors: status'Chat room not found', status: 422} unless @chat_room.present?
  end
end