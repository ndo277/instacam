class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :session_token, null: false, unique: true
      t.string :password_digest, null: false
      t.string :display_name, limit: 30
      t.string :bio, limit: 150
      t.string :website
      t.string :gender
      t.string :phone_number, limit: 15
      t.timestamps
    end

    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end
