class MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    if @message.save
      render json: {request: @message, status: ok}
    else
      render json: {errors: @message.errors.full_messages, status: 409}
    end
  end

  private

  def message_params
    params.require(:message).permit(:sender_id, :receiver_id, :body, :chat_room_id)
  end
end