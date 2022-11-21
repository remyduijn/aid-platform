class CommunityRequestSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :type, :description, :status, :lat, :lng
end
