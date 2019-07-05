class UniqueIndexOnFollowings < ActiveRecord::Migration[5.2]
  def change
    add_index :followings, [:follower_id, :followee_id], unique: true
  end
end
