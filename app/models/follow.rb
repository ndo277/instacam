class Follow < ApplicationRecord
  validates :follower_id, presence: :true
  validates :followee_id, presence: :true, uniqueness: {scope: :follower_id}


end