class ChatRoom < ApplicationRecord
  has_many :messages, dependent: :destroy
	belongs_to :volunteer, class_name: :User, foreign_key: 'volunteer_id'
  belongs_to :requester, class_name: :User, foreign_key: 'requester_id'
end
