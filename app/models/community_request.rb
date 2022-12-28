class CommunityRequest < ApplicationRecord
  belongs_to :user
  has_many :chat_rooms

  FULFILLED   = 'fulfilled'
  UNFULFILLED = 'unfulfilled'

  enum status: { fulfilled: FULFILLED,  unfulfilled: UNFULFILLED}, _default: :unfulfilled



  scope :volunteered_by_specific_user, -> (user_id) { joins(:chat_rooms).where('chat_rooms.volunteer_id= ?', user_id) }

end
