# One to Many Relationships

## Objectives
* [ ] Implement one object to many objects relationship
  * [ ] One object has many objects
  * [ ] One object belongs to another object
* [ ] Demonstrate the concept of Entity Relationship Diagram (ERD)
* [ ] Practice passing custom objects as arguments to methods
* [ ] Demonstrate single source of truth
* [ ] Infer type of method (class or instance) through naming conventions (`.` methods vs `#` methods)  
* [ ] Recognize a single point of entry for an application

## Key Concepts
* Domains - Domain model
- Provides structure to a database
- Modeling real world objects

- Schools
  - Classrooms, Students, Teachers, Classes, Grades, Scores, Books, Subjects, Administrators, Staff, Assignments
- Sports
  - Sports, Officials, Players, Games, Rankings, Equipment, Stadiums, Location, Uniforms
- Banks
  - Accounts, Currencies, Tellers, Administrators, ATMs, Users, Loans, Mortgages, Investments


Instagram
- User -< Followers 
- User -< Posts -< Medias -< Comments 
- Medias -< Likes


* One-to-Many relationships
- Teacher -< Students
- Doctor -< Patients
- Driver -< Rides
- Coaches -< Athletes
- Automobile -< Tires
- Meals -< Ingredients
- Actors -< Roles
- Countries -< Citizens
- Continents -< Countries 



* domain - that sliver of the real world we want to model in our application
* domain model - the representation of the domain via classes/model in our app
* model - primarily for data storage/access, but also for defining some behavior
* one-to-many - a relationship between things in the world that can be described by "thing thing has many of this other thing" or "this thing belongs to one other thing"


## Discussion Questions

1. What is a one-many-relationship? How would we draw that in an ERD?
2. What does _Single Source of Truth_ mean?
3. What is a model? Domain? Domain model?
4. What is the relationship between a class and an instance?