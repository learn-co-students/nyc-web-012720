class Country

  attr_accessor :population, :name, :capital_city, :currency, :continent

  @@all = []

  def initialize(population, name, capital_city, currency, continent)
    @population = population
    @name = name
    @capital_city = capital_city
    @currency = currency
    @continent = continent

    @@all << self
  end

  # def save
  #   @@all << self
  # end

  def delete(target_name)
    # look through Country.all, find country who's name matches the target
  
    
  end

  def self.all
    @@all
  end
end

# attributes
# population - number
# name - string
# capital_city - string
# currency - string
