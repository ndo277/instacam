class ChangeFollowingsToFollows < ActiveRecord::Migration[5.2]
  def change
    rename_table :followings, :follows
  end
end
