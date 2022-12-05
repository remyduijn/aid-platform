class ChatRoom < ApplicationRecord

  has_many :messages, dependent: :destroy
	belongs_to :volunteer, class_name: :User, foreign_key: 'volunteer_id'
  belongs_to :requester, class_name: :User, foreign_key: 'requester_id'
  belongs_to :community_request

  scope :by_logged_in_user, -> (current_user_id) {where("volunteer_id =? OR requester_id =?", current_user_id, current_user_id)}
  scope :user_chats, -> (volunteer_id ,requester_id, community_request_id) {where(requester_id: requester_id, community_request_id: community_request_id, volunteer_id: volunteer_id).first_or_initialize }

  def chat_room_name
    requester.name + "##{requester_id} : " +  volunteer.name + "##{volunteer_id}"
  end
end
