class Cereal < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews 

  validates :name, :slogan, uniqueness: true
  validates :name, :slogan, presence: true
  validates :release_year, numericality: { greater_than: 1920, less_than: 2000, message: "my message is better" }


  validate :can_not_be_called_greg

  def can_not_be_called_greg
    if self.name && self.name === "Greg"
      self.errors.add(:name, "Yo Try Again Fool")
    end 
  end 

end
