class ChatRoomSerializer < ActiveModel::Serializer
  attributes :id
  has_many :messages
  belongs_to :volunteer
  belongs_to :requester
end
