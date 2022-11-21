class MessagesSerializer < ActiveModel::Serializer
  attributes :id, :body, :chat_room_id
end
