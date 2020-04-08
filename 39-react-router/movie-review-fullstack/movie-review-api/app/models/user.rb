class User < ApplicationRecord
    # has_many :reviews
    # has_many :reviewed_movies, through: :reviews, class_name: "Review"

    validates :username, uniqueness: true

    has_secure_password
end
