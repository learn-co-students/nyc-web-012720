# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
maladies = [ 
    {
        name: 'cough',
        image: 'https://www.thehealthsite.com/wp-content/uploads/2013/06/understanding-the-cough-process1.jpg'
    },
    {
        name: 'phlegm',
        image: 'https://images.medicinenet.com/images/appictures/mucus-s3-bronchial-tube.jpg'
    },
    {
        name: 'sore throat',
        image: 'https://www.pharmaceutical-journal.com/Pictures/580xAny/8/7/4/1078874_tonsils-figure-online-1.png'
    }
]

remedies = [
    {
        name: 'raspberry beer',
        ingredients: 'beer, raspberry juice',
        instructions: 'mix em together and heat em up',
        is_alcoholic: true,
        maladies: [1, 3],
        image: 'https://blog.eckraus.com/wp-content/uploads/2015/07/Raspberry-Blonde.png'
    },
    {
        name: 'onion syrup',
        ingredients: 'onion, sugar',
        instructions: 'mix em in a jar, put it in a dark place for 24 hours, drink a little and breathe near no one',
        is_alcoholic: false,
        maladies: [1, 2, 3],
        image: 'https://cdn.copymethat.com/media/orig_homemade-onion-cough-syrup-20170521233655356730eh15q.jpg'
    }, 
    {
        name: 'vicks',
        ingredients: 'vicks',
        instructions: 'put it bottom of your feet, on your chest, basically anywhere. BATHE IN IT',
        is_alcoholic: false,
        maladies: [1],
        image: 'https://www.cvs.com/bizcontent/merchandising/productimages/large/32390000361_2.jpg'
    }
]

maladies.each do |malady|
    Malady.create!(malady)
end


remedies.each do |remedy|
    @remedy = Remedy.create!({
        name: remedy[:name],
        ingredients: remedy[:ingredients],
        instructions: remedy[:instructions],
        image: remedy[:image],
        is_alcoholic: remedy[:is_alcoholic]
    })
    
    remedy[:maladies].each do |match|
        Treatment.create({
            remedy: @remedy,
            malady: Malady.find(match)
        })
    end
end
