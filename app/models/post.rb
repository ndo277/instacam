class Post < ApplicationRecord
  validates :user_id, presence: :true

  has_one_attached :photo

  belongs_to :user






end