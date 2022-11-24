class ChatRoom < ApplicationRecord

  has_many :messages, dependent: :destroy
	belongs_to :volunteer, class_name: :User, foreign_key: 'volunteer_id'
  belongs_to :requester, class_name: :User, foreign_key: 'requester_id'
  belongs_to :community_request

  scope :by_logged_in_user, -> (current_user_id) {where("voluteer_id =? OR requester_id =?", current_user_id, current_user_id)}
end
