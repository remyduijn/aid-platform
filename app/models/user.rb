class User < ApplicationRecord
  has_secure_password

  validates_presence_of :email
  validates_uniqueness_of :email
  
  validates_presence_of :name
  validates_presence_of :last_name

  has_one_attached :identity
  has_many :community_requests
end
 