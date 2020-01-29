require 'pry'

# alcoholic: boolean
# size: integer
# name: string
# ingredients: array


# Blueprint
class Drink

  # attr_reader :alcoholic, :name, :size, :ingredients
  # attr_writer :alcoholic, :name, :size, :ingredients

  attr_accessor :alcoholic, :name, :size, :ingredients

  def initialize(name, size, alcoholic, ingredients)
    @name = name
    @size = size
    @alcoholic = alcoholic
    @ingredients = ingredients
  end

  def change_ingredient(target_ingredient, new_ingredient)
    
  end

  # getter method -> reports on attributes within the class
  # def alcoholic
  #   @alcoholic
  # end

  # setter method -> change value stored on instance variable
  # def size=(new_size)
  #   @size = new_size
  # end


  # def name
  #   @name
  # end

  ## ORDER MATTERS
  # def beef
  #   @beef
  # end

  # def beef
  #   puts "MCSTEAKER"
  #   @beef
  # end

end # end of class



martini = Drink.new("Dirty Martini", 3, true, ["Vermouth", "Olives", "Gin"])
mach = Drink.new("Macchiatto", 8, false, ["Coffee", "Love", "Puppies"])



binding.pry
