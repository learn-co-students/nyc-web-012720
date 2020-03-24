require 'pry'

class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end
  
  def say_name
    puts "Hi! My name is #{self.name}"
  end

  def self.say_something
    puts "My class is #{self}."
  end
end

michael = Person.new("Michael")

binding.pry 
puts 'okthxbye'

















