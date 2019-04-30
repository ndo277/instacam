class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :display_name, length: {maximum: 30}
  validates :bio, length: {maximum: 150}
  validates :phone_number, length: {maximum: 15}

  before_validation :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    if user && user.is_password?(password)
      user 
    else
      nil
    end
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end




end