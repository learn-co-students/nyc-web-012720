class User < ApplicationRecord
  has_many :reviews
  has_many :cereals, through: :reviews 
end
