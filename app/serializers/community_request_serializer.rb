class CommunityRequestSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :request_type, :description, :status, :lat, :lng
  belongs_to :user
end
