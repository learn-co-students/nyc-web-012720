require_relative '../config/environment'
require "pry"


def welcome
  puts "Welcome to Waft"
  puts "Are you a driver or a customer?"
  user_type = gets.chomp 
  puts "welcome what is your name?"
  name = gets.chomp 
  set_customer(user_type, name)
end 

def set_customer(user_type, name)
  if user_type == "customer"
    user = Customer.find_or_create_by(name: name)
    "Welcome" + user.name
    r = user.request_ride
    r.distance = 19
    r.cost = 7
    r.save
  elsif user_type == "driver"
    user = Driver.find_or_create_by(name: name)
  end 
  binding.pry
  r
end 



welcome

binding.pry
0