class CommunityRequest < ApplicationRecord
  before_create :broadcast_requests_count
  FULFILLED   = 'fulfilled'
  UNFULFILLED = 'unfulfilled'
  SHOW_LIMIT  = 5

  belongs_to :user
  has_many :chat_rooms

  validates_length_of :chat_rooms, maximum: SHOW_LIMIT
  
  enum status: { fulfilled: FULFILLED,  unfulfilled: UNFULFILLED}

  scope :volunteered_by_specific_user, -> (user_id) { joins(:chat_rooms).where('chat_rooms.volunteer_id= ?', user_id) }

  def can_republish?
    (Time.zone.now - created_at) > 1.day.to_i
  end

  def broadcast_requests_count
    ActionCable.server.broadcast('dashboard_notification_channel', CustomSerializer.new(self.class.count).as_json)
  end

end
