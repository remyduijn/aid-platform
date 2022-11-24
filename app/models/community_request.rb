class CommunityRequest < ApplicationRecord
  belongs_to :user
  has_many :chat_rooms
end
