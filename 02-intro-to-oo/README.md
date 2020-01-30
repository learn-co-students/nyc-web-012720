# Intro to Object Orientation
[Object Orientation](https://en.wikipedia.org/wiki/Object-oriented_programming)

## SWBATs
- [x] Write methods to encapsulate behavior
- [x] Tell each other what the point of object oriented programming is
- [x] Make objects (instances)
- [ ] Tell each other about `self`
- [x] attr_ macros, att r_accessor, attr_reader, attr_writer
- [ ] regular variables vs class variables vs instance variables
- [ ] instance methods vs class methods

### Methods model behavior
 - Implicit vs Explicit return
 - Parameters and default parameters
 - Method lookup (variables come first)
 - Scope (normal variables defined outside of a method are not accessible within)
 - Methods allow us to write repeatable bits of code
 - Methods encapsulate behaviors
 - Typically defined as verby

### We model real world things/concepts using objects. 
 - We use code to represent real life things
 - Real life objects have 2 things
    - Attributes - things that define what it a thing is like
    - Behaviors - things that the thing can do

### Everything is an Object in Ruby
  * `String.ancestors`
  * `Integer.ancestors`
  * `Array.ancestors`
  * `Hash.ancestors`

### Issue with using hashes to represent things:

### Using objects instead:
  * A class is like a blueprint of a thing
  * An *instance* is the thing itself

### Building out our objects:
  * `#initialize` determines what happens when we make a new instance of a class.
  * instance variables allow our instances to have state *(remember some data)*
  * creating getter methods will allow us to see instance variables
    * `attr_reader` is just syntatic sugar for a simple getter method.
  * creating setter methods will allow us to set values into instance variables.
    * `attr_writer` is just syntatic sugar for a simple writer method.
    * `attr_accessor` is just syntatic sugar for when you need both reader and writer.
  
  * we can create instance methods by just defining methods within a class.
    * instance methods can reference other instance methods.

### Deliverables