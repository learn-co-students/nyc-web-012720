require 'pry'
require_relative './continent.rb'
require_relative './country.rb'

asia = Continent.new("Asia", "temperate")
europe = Continent.new("Europe", "temperate")
antarctica = Continent.new("antarctica", "arctic")


khaz = Country.new(18000000, "Khazikstan", "Nur-Sultan", "Tenge", europe)
egypt = Country.new(30000000, "Egypt", "Cairo", "Pound", asia)
china = Country.new(1300000000, "China", "Beijing", "RMB", asia)
santas_workshop = Country.new(10, "Santa's Workshop", "Santa's chair", "Good deeds", antarctica)
binding.pry
