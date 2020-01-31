# Object Relations Many to Many

## SWBATs
- [ ] Use belongs-to and has-many relationships to build many-to-many relationships
- [ ] Explain the purpose of a join model
- [ ] Model a simple domain using belongs-to and has-many relationships

Many-to-many relations are built on top of one-to-many relations. For a many-many relation to be possible, we need a **join model**. There is no right or wrong answer when setting up relationships, it all depends on what you want your app to be able to do.

## Domain Modeling
This is the process of drawing out your relationships before actually coding. This is one of the most important steps. Do not skip this step.

### Examples:
* Let's build a movie review app.
  * A user can review many movies.
  * A movie can be reviewed by many users.
  <img src="movie-reviews.png" />

* What about spotify?
  <img src="spotify.png" />

## The Join Model
Very important, the join model is what enables the many to many. The join model will have a one to many relationship with the models it is trying to join.

```ruby
class Review
  attr_reader :user, :movie, :content

  @@all =[]

  def initialize(user, movie, content)
    @user = user
    @movie = movie
    @content = content

    @@all << self
  end

  def self.all
    @@all
  end
end
```

## Has Many Through
If our join models are properly set up, now we can go through the join model to establish the many-many relationship.


```ruby
class User
  def initialize(username)
    @username = username
  end

  # this method should return all the reviews written by this user.
  def reviews
    # iterate through ALL The reviews.
    # only select the reviews that belong to this user.
    Review.all.select { |review| review.user == self }
  end

  def movies
    reviews.map { |review| review.movie }
  end
end
```