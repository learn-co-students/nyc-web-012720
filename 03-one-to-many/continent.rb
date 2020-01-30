class Continent

  # lets us read/write attributes to instances
  # creates getter and setter methods for these attributes
  attr_accessor :climate
  attr_reader :name

  # this will be used to store all Continent instances
  @@all = []

  # called everytime you create a new instance
  # to assign initial values to your attributes to an instance
  def initialize(name, climate)
    @name = name
    @climate = climate

    @@all << self
  end

  # def save
  #   @@all << self
  # end

  def countries
    Country.all.select do |country|
      country.continent == self
    end
  end

  def self.all
    @@all
  end
end

# attributes
# name - string
# climate - string

# countries - array of country objects *this is not quite right*



# how do i setup a class?
