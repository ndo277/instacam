class Post < ApplicationRecord
  validates :user_id, presence: :true

  has_one_attached :photo

  belongs_to :user

  has_many :comments

  has_many :likes


end