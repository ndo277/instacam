class Follow < ApplicationRecord
  validates :follower_id, presence: :true
  validates :followee_id, presence: :true, uniqueness: {scope: :follower_id}

  belongs_to :follower, 
  class_name: :User, 
  foreign_key: :follower_id

  belongs_to :followee,
  class_name: :User,
  foreign_key: :followee_id
end