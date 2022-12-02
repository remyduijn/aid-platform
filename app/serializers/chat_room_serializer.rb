class ChatRoomSerializer < ActiveModel::Serializer
  attributes :id, :chat_room_name
  has_many :messages
  belongs_to :volunteer
  belongs_to :requester
end
