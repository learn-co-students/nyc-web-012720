# You don't need to require any of the files in lib or pry.
# We've done it for you here.
require_relative '../config/environment.rb'

# test code goes here
pilates = Gym.new("Pilates Studio")
mercedes_club = Gym.new("Mercedes Club")
rise_by_we = Gym.new("Rise By We")
soul_cycle = Gym.new("Soul Cycle")

rocky = Lifter.new("Rocky Balboa", 500)
arnold = Lifter.new("Arnold Shwarzeennne", 5000000)
rhonda = Lifter.new("Rhonda Rousey", 800)

mem1 = Membership.new(100, pilates, rocky)
mem2 = Membership.new(90, mercedes_club, rocky)
mem3 = Membership.new(300, rise_by_we, arnold)
mem4 = Membership.new(280, soul_cycle, rhonda)
mem5 = Membership.new(173, rise_by_we, rhonda)
mem6 = Membership.new(1000, mercedes_club, rocky)


binding.pry
