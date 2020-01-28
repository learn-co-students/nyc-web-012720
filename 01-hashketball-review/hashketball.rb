require 'pry'
# Write your code here!


array = ["Beef", "Chicken", 23, 53, "Potato", 9, "Broccoli"]

# hash = {beef: 2, chicken: "soup", potato: []}

car = {
  make: "Honda",
  model: "Accord",
  year: 2017,
  color: "Burnt Orange",
  miles_per_gallon: 23.2,
  transmission: "Automatic",
  is_new: true,
  owners: [
    {
      name: "Jane",
      age: 23
    }, 
    {
      name: "Larry",
      age: 21
    }, 
    {
      name: "Osgood",
      age: 27
    }, 
    {
      name: "Kelly",
      age: 26
    }
  ]
}

# repetitive
# not dynamic - if there are more or less owners, this code will not be sufficient for printing this array
# puts car[:owners][0]
# puts car[:owners][1]


## BASIC ITERATION: EACH
# car[:owners].each do |owner|
#   puts owner[:name]
# end


## MAPPING
# ages = []
# car[:owners].each do |owner|
#   ages << owner[:age]
# end

ages = car[:owners].map do |owner|
  owner[:age]
end

## SELECTING / FINDING
# owners_over_25 = []
# car[:owners].each do |owner|
#   if owner[:age] >= 25
#     owners_over_25 << owner 
#   end
# end

owners_over_25 = car[:owners].select do |owner|
  owner[:age] >= 25
end

first_owner_over_25 = car[:owners].find do |owner|
  owner[:age] >= 25
end


## REDUCE
sum = ages.reduce(0) do |aggregator, age|
  aggregator + age
end




binding.pry

