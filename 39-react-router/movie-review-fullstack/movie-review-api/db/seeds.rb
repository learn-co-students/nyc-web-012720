# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
      username: "Tony",
      password: "123",
      admin: true
)

User.create(
      username: "Caryn",
      password: "123",
      admin: true
)

User.create(
    username: "Sebastian",
    password: "123",
    admin: true
)

17.times do 
    User.create(
      username: Faker::Name.unique.name,
      password: "123"
    )
end

movies = [
  {
    title: "The Dark Crystal",
    director: "Jim Henson",
    year: 1982,
    upvotes: rand(100..1000),
    downvotes: rand(100..1000),
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3730/3730957_sa.jpg"
  },
  {
    title: "Princess Bride",
    director: "Rob Reiner",
    year: 1987,
    upvotes: rand(100..1000),
    downvotes: rand(100..1000),
    img: "https://images-na.ssl-images-amazon.com/images/I/7116Aa2ZkRL._SY445_.jpg"
  },
  {
    title: "Joker",
    director: "Todd Phillips",
    year: 2019,
    upvotes: rand(100..1000),
    downvotes: rand(100..1000),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGNIo7kzJjn6lCyD4TYfpHIOMJL035fBubKvEF97IZZisfHiDQ"
  },
  {
    title: "The Wiz",
    director: "Sidney Lumet",
    year: 1978,
    upvotes: rand(100..1000),
    downvotes: rand(100..1000),
    img: "https://images-na.ssl-images-amazon.com/images/I/61dYPBM3XNL._AC_SY400_.jpg"
  },
  {
    title: "Black Panther",
    director: "Ryan Coogler",
    year: 2018,
    upvotes: rand(100..1000),
    downvotes: rand(100..1000),
    img: "https://images-na.ssl-images-amazon.com/images/I/91YGCttVr6L.jpg"
  },
  {
    title: "Selena",
    director: "Gregory Nava",
    year: 1997,
    upvotes: rand(100..1000),
    downvotes: rand(100..1000),
    img: "https://m.media-amazon.com/images/M/MV5BZGE0Y2RlNmQtZDY0Ni00Njk5LWFiZWUtMzc5N2VlZTBhOGE5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
]

movies.each do |movie|
  Movie.create(movie)
end

10.times do 
  Review.create({
    content: Faker::Hipster.paragraph,
    user: User.all.sample,
    movie: Movie.all.sample,
    stars: rand(0..5)
  })
end