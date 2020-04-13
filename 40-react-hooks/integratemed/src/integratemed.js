export const maladies = [ 
    {
        id: 1,
        name: 'cough'
    },
    {
        id: 2,
        name: 'phlegm'
    },
    {
        id: 3,
        name: 'sore throat'
    }
]

export const remedies = [
    {
        id: 1,
        name: 'raspberry beer',
        ingredients: ['beer', 'raspberry juice'],
        instructions: 'mix em together and heat em up',
        maladies: [1, 3]
    },
    {
        id: 2,
        name: 'onion syrup',
        ingredients: ['onion', 'sugar'],
        instructions: 'mix em in a jar, put it in a dark place for 24 hours, drink a little and breathe near no one',
        maladies: [1, 2, 3]
    }, 
    {
        id: 3,
        name: 'vicks',
        ingredients: ['vicks'],
        instructions: 'put it bottom of your feet, on your chest, basically anywhere. BATHE IN IT',
        maladies: [1]
    }
]