class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :sender_id, :chat_room_id, :created_at
end
