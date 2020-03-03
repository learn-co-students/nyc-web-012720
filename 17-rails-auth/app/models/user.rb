class User < ApplicationRecord
  has_secure_password

  # attr_reader :password
  # # def password
  # #   @password
  # # end
  #
  # def password=(plain_text_pw)
  #   # TRANSFORM the ptpw into something that is NOT HUMAN READABLE
  #   # byebug
  #
  #   self.password_digest = BCrypt::Password.create(plain_text_pw)
  # end
  #
  # def authenticate(pt_pw)
  #   if BCrypt::Password.new(self.password_digest) == pt_pw
  #     @user
  #   else
  #     false
  #   end
  # end


end
