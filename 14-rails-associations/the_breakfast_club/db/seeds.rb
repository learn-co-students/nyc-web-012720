# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cereal.destroy_all


cereals = [
  {name: "Cinnamon Toast Crunch", brand: "General Mills ", release_year: 1984, slogan: "", img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0OS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYzNTEyODU0MH0.W2AGKmfUis11yY8M284FZpqDNVlxMBE3gRJDL6Ev_fA/img.png?width=980"},
  {name: "Lucky Charms", brand: "General Mills", slogan: "Magically Delicious", release_year: 1964, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA1NS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYwMTc5OTg5Nn0.t_VCL9PPQoWAow_6Bi2dEaQbgRwHaQu8f9UrkaGB-4I/img.png?width=980"},
  {name: "Raisin Bran", brand: "Kellogg’s", slogan: "Two Scoops", release_year: 1951, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0NS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYyMjAxMjc2NX0.IDSYEAeUuQzcXWWmBiiEFxPKE0W_UDaHT6IM7BdIIFc/img.png?width=980"},
  {name: "Honey Bunches of Oats", brand: "Post Holdings", slogan: "", release_year: 1989, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0MS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYwNTM1MjQ4Mn0.TkoUYBig_-NGCY3MM7rAZQ02PtmaU7tvUQ1TnlSMC6E/img.png?width=980"},
  {name: "Honey Nut Cheerios", brand: "General Mills", slogan: "", release_year: 1979, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTAzNy9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTU4NTEyMDY2Nn0.l125Fp_PVXpQeRR-l7wQz_8JEjy4I1cI-1oSkf19af8/img.png?width=980"},
  {name: "Mini-Wheats", brand: "Kellogg’s", slogan: "", release_year: 1971, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0Ni9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTU5NjAyOTM1N30.9BGDZoB_6rkmaCP1IFH9Q6j5h0dsVjVfTTLfBNT-fK0/img.png?width=980"},
  {name: "Corn Pops", brand: "Kellogg’s", slogan: "", release_year: 1951, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA1MS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYxNDQwNzg0N30.M6WJ7rYo85HUkl6V1bsgj45hAQBxjlPaIhk-NXaxeZs/img.png?width=980"},
  {name: "Life", brand: "Quaker Oats", slogan: "", release_year: 1965, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0OC9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYxMjYxODkzMX0.14eqoLu2CYH34-jzXYsI7ATLqVI98oeg9hItlpyw8l4/img.png?width=980"},
  {name: "Fruity Pebbles", brand: " Post Holdings", slogan: "Little Pieces... Big Taset", release_year: 1971, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0NC9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYzMzAyMjc3MH0.S49QDFe9csvcu2CM_Z0AhGLcHt-_9jPGs2RppIG5DmQ/img.png?width=980"},
  {name: "Honeycomb", brand: "Post Holdings", slogan: "Me Want Honeycomb", release_year: 1965, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0My9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYzNzcxNTM4OX0.HdYnGljCY0dLLG6LNz5mFXdZLhY-Vic7P2n21ZTBEpA/img.png?width=980"},
  {name: "Special K", brand: "Kellogg's", slogan: "", release_year: 1994, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0Ny9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTU5MTAzMDIxMH0.7tbQTNmKcvc2S_SR7Hk1t0DVLDiSJtMVuDR3_hyVu7M/img.png?width=980"},
  {name: "Cap'n Crunch", brand: "Quaker Oats", slogan: "", release_year: 1963, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTAzOS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYxMDIwNjA4NH0.THqINSgJuyjSaStZTnq3JJTDbprSrD8wYbavw0aCwRE/img.png?width=980"},
  {name: "Froot Loops", brand: "Kellogg’s", slogan: "", release_year: 1962, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTAzOC9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYzOTk0NTk2M30.yCRgnMTPaljJ4D10ipf2GhJUZ9Cv9PZzxN6KieJj8Zo/img.png?width=980"},
  {name: "Trix", brand: "General Mills", slogan: "Silly Rabit Trix are for Kids", release_year: 1996, img_url: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzEwNTA0Mi9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTYxMjY2ODYyNn0.rw1yKc0DHvp-0iXhoWzV2RAKZ9L-diJ8Y-UlqveZyVk/img.png?width=980"}
]



# humans = [
  #   {name: "Adit", img_url: "https://ca.slack-edge.com/T02MD9XTF-URW3QQ3M1-d54e09a41768-512"},
  #   {name: "Andrew Santos", img_url: "https://ca.slack-edge.com/T02MD9XTF-UL8B585HP-14e7e4df1c70-512"},
  #   {name: "David Lee", img_url: "https://ca.slack-edge.com/T02MD9XTF-USX83QNN4-2071edef3fee-512"},
  #   {name: "David Shin", img_url: "https://ca.slack-edge.com/T02MD9XTF-URUPJ342X-dd4340a092d0-512"},
#   {name: "Greg Wagner", img_url: "https://ca.slack-edge.com/T02MD9XTF-USKPQPYGK-633b603d1a1f-512"},
#   {name: "Jared Fleming", img_url: "https://ca.slack-edge.com/T02MD9XTF-USX8FCNDT-b0dc9d1dfd55-512"},
#   {name: "Jason Chung", img_url: "https://ca.slack-edge.com/T02MD9XTF-URUPJ3K99-1db0f8c707f8-512"},
#   {name: "John Reiner", img_url: "https://ca.slack-edge.com/T02MD9XTF-URUPJ3VGB-4c0c32218eea-512"},
#   {name: "Kelly Becker", img_url: "https://ca.slack-edge.com/T02MD9XTF-URUPJ4A9H-cc8ebbaf4e79-512"},
#   {name: "LeeMac", img_url: "https://ca.slack-edge.com/T02MD9XTF-USM2G3NRF-g258631a02ff-512"},
#   {name: "Luis M Alejo", img_url: "https://ca.slack-edge.com/T02MD9XTF-USWQ5LCNQ-614ff5e4d6d0-512"},
#   {name: "Ricky Wahba", img_url: "https://ca.slack-edge.com/T02MD9XTF-US5PV78AG-66cf5f2c3011-512"},
#   {name: "April", img_url: "https://ca.slack-edge.com/T02MD9XTF-USZ405DP1-c6784f84b019-512"},
#   {name: "Halton Bagley", img_url: "https://ca.slack-edge.com/T02MD9XTF-USJEE4TPC-7ccd2cb87c65-512"},
#   {name: "Leon Jamison", img_url: "https://ca.slack-edge.com/T02MD9XTF-US7HH5T5W-1e810becd4b7-512"},
#   {name: "Komal D", img_url: "https://ca.slack-edge.com/T02MD9XTF-UST90CMQR-c28fbdd7708f-512"},
#   {name: "Shalva", img_url: "https://ca.slack-edge.com/T02MD9XTF-US686HR1B-b7765cacf83f-512"},
#   {name: "Joseph Kniskern", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR8H33T0E-3dba19abe3aa-512"},
#   {name: "Jorge Basilio", img_url: "https://ca.slack-edge.com/T02MD9XTF-US67WRDLY-6a9aaa57811e-512"},
#   {name: "Sekou Dosso", img_url: "https://ca.slack-edge.com/T02MD9XTF-USWQ5NUA0-4b7be62efb34-512"},
#   {name: "Sam Chen", img_url: "https://ca.slack-edge.com/T02MD9XTF-USX8FBR45-a1515e37c977-512"},
#   {name: "Gregory Dwyer", img_url: "https://ca.slack-edge.com/T02MD9XTF-U8H2RA3C1-643c8ce562ef-512"},
#   {name: "Masta Balasta", img_url: "https://ca.slack-edge.com/T02MD9XTF-U5YSRUVJ6-31bcc120729a-512"},
#   {name: "Tyree Williams", img_url: "https://ca.slack-edge.com/T02MD9XTF-URUPVBT98-621eaf0eabb7-512"},
#   {name: "Yoan Ante", img_url: "https://ca.slack-edge.com/T02MD9XTF-UCPMFFXEC-88c59874fa88-512"}
# ]

puts "Making Cereals..."
cereals.each {|cereal| Cereal.create(cereal)}

# puts "Making Humans..."
# humans.each {|human| Human.create(human)}








































    # cereals = [
    #   {name: "Cinnamon Toast Crunch", brand: "General Mills ", release_year: 1984, slogan: "", img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Cinnamon-Toast-Crunch.jpg"},
    #   {name: "Lucky Charms", brand: "General Mills", slogan: "Magically Delicious", release_year: 1964, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Lucky-Charms.jpg"},
    #   {name: "Frosted Flakes", brand: "Kellogg’s", slogan: "They’re Gr-r-reat", release_year: 1951, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Frosted-Flakes.jpg"},
    #   {name: "Honey Bunches of Oats", brand: "Post Holdings", slogan: "", release_year: 1989, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Honey-Bunches-of-Oats.jpg"},
    #   {name: "Honey Nut Cheerios", brand: "General Mills", slogan: "", release_year: 1979, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Honey-Nut-Cheerios.jpg"},
    #   {name: "Apple Jacks", brand: "Kellogg’s", slogan: "", release_year: 1971, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Apple-Jacks.jpg"},
    #   {name: "Corn Pops", brand: "Kellogg’s", slogan: "", release_year: 1951, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Corn-Pops.jpg"},
    #   {name: "Quaker Quisp", brand: "Quaker Oats", slogan: "", release_year: 1965, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Quaker-Quisp-.jpg"},
    #   {name: "Fruity Pebbles", brand: " Post Holdings", slogan: "Little Pieces... Big Taset", release_year: 1971, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Fruity-Pebbles.jpg"},
    #   {name: "Honeycomb", brand: "Post Holdings", slogan: "Me Want Honeycomb", release_year: 1965, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Honeycomb.jpg"},
    #   {name: "Reese’s Puffs", brand: "General Mills", slogan: "", release_year: 1994, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Reeses-Puffs.jpg"},
    #   {name: "Cocoa Puffs", brand: "General Mills", slogan: "Cuckoo For CoCoa Puffs", release_year: 1958, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Cocoa-Puffs.jpg"},
    #   {name: "Froot Loops", brand: "Kellogg’s", slogan: "", release_year: 1962, img_url: "https://cdn.hiconsumption.com/wp-content/uploads/2014/03/Froot-Loops.jpg"}
    # ]