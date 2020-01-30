
### Throwing errors if wrong type!
```rb
def hello(name) # method/definition signature - name your method and declare parameters
  # method body
  if name.class == String
    puts "Hello #{name}!!!" 
  else
    raise "Whoa, that ain't no string!"
  end
end

```

### Method stuff!
```rb
beef = "steak"


# method definition
def hello(name = "whoever you are") # method/definition signature - name your method and declare parameters
  # method body
  # puts beef # no scope
  puts "Hello #{name}!!!" 
end


# method invocation
hello("Halton")
# hello("April")
# hello("Kelly")
# hello("Adit")
# hello("Sam")


puts beef
```

Methods and hashes do an okay job! But not good enough...
```rb
# Normally cannot store methods in variables or in hashes
# BUT you can do this with something called a lambda

# Hashes which are great at representing attributes of a thing
computer = {
  cpu: 2.3,
  ram: 8,
  model: "Mac Book Pro",
  size: 15,
  color: "Silver",
  used: true,
  installed_languages: ["English", "French", "Korean"]
}

computer2 = {
  cpu: 2.3,
  ram: 8,
  model: "Mac Book Pro",
  size: 15,
  color: "Silver",
  used: true,
  installed_languages: ["Mandarin", "German"]
}

# Factory method
def create_computer(cpu, ram, model, size, color, used, installed_languages)
  {
    cpu: cpu,
    ram: ram,
    model: model,
    size: size,
    color: color,
    used: used,
    installed_languages: installed_languages
  }
end

# Methods which are great at representing behaviors of a thing
def list_languages(comp)
  comp[:installed_languages].each do |lang|
    puts lang + " is installed!"
  end
end

list_languages(computer)
list_languages(computer2)

```



### Class syntax

```rb
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
```