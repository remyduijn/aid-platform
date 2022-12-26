class CommunityRequestSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :request_type, :description, :status, :lat, :lng, :available_for_volunteer, :republish
  belongs_to :user

  def available_for_volunteer
    object&.chat_rooms&.count <= CommunityRequest::SHOW_LIMIT 
  end

  def republish
    object.can_republish?
  end
end
