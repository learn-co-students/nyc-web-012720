
# Rails API

## Questions

## Learning Goals

- [ ] Initialize a Rails application in API mode
- [ ] Utilize `fetch` to make calls to Rails API and manipulate DOM with response
- [ ] Differentiate between 


### Helpful Commands

* create a Rails app in API mode with a Postgresql database (and not as a Git repository)
  * `rails new movies-api --api -G -d=postgresql`


* create a new resource:
  * `rails g resource Api::V1::Movie title year:integer score:integer imageUrl`