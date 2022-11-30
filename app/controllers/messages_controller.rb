class MessagesController < ApplicationController

  before_action :set_char_room, only: %i[create]

  def create
    @message = @chat_room.messages.new(message_params)
    if @message.save
      render json: {request: @message, status: 200}
      ActionCable.server.broadcast("ChatRoomChannel for chat room with id #{@chat_room.id}", @message)
    else
      render json: {errors: @message.errors.full_messages, status: 409}
    end
  end

  private

  def message_params
    params.require(:message).permit(:sender_id, :receiver_id, :body, :chat_room_id)
  end

  def set_char_room
    @chat_room = ChatRoom.find_by_id(params[:id])
    render json: {errors: 'Chat room not found', status: 422} unless @chat_room.present?
  end
end