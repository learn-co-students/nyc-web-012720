class Customer < ActiveRecord::Base
  has_many :rides 
  has_many :drivers, through: :rides 


  def request_ride 
    r = Ride.new()
    r.driver = Driver.all.sample
    r.customer = self
    r.save
    r
  end 
  
end