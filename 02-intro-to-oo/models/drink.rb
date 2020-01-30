class Drink

  attr_accessor :alcoholic, :name, :size

  @@all = []

  # INSTANCE METHODS - stuff that an individual instance can do
  def initialize(name, size, alcoholic, ingredients)
    @name = name
    @size = size
    @alcoholic = alcoholic
    @ingredients = ingredients

    @@all << self
  end

  def calculate_taxes
    # whole bunch of logic
    puts "CALCULATING TAXES"
  end

  def ingredients #custom getter
    @ingredients.join(", ")
  end

  def print_details
    # calculate_taxes # short for self.calculate_taxes

    puts "This is a #{self.name}. "
    puts "It is #{self.size} and is #{self.alcoholic ? "" : "not "}alcoholic"
    puts "It contains: #{self.ingredients}"
  end

  # CLASS METHODS - stuff the entire class can do
  def self.all
    @@all
  end

end # end of class

# condition ? true_case : false_case