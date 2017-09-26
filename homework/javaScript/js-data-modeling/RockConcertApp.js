/* ROCK CONCERT APP */

/* PART I */

//User Info
    //Favorite Bands
        //Band Tour Dates + Tickets
    //Recommended

/* PART II */

const userInfo = {
    name: String,
    age: Number,
    location: String,
    favoriteBands: []
}

const favoriteBand = {
    name: String,
    genre: String,
    members: [],
    onTour: Boolean,
    tourDates: []
}

/* PART III */

const exampleUser = {
    name: "Grant Spell",
    age: 21,
    location: "Atlanta, GA",
    favoriteBands: [{
        name: "The Eagles",
        genre: "Rock",
        members: [ "Don Henley", "Joe Walsh", "Timothy B. Schmit", "Glenn Frey", "Bernie Leadon", "Randy Meisner", "Don Felder" ],
        onTour: true,
        tourDates: [{
            city: "Atlanta, GA",
            date: "October 20, 2017",
            venue: "Philips Arena",
            buyTickets: "<link to purchase tickets>"
            },
            {
            city: "Atlanta, GA",
            date: "October 21, 2017",
            venue: "Philips Arena",
            buyTickets: "<link to purchase tickets>"
            }]
        },
        {
            name: "Father John Misty",
            genre: "Indie Rock",
            members: [ "Josh Tillman" ],
            onTour: true,
            tourDates: [{
                city: "Atlanta, GA",
                date: "September 27, 2017",
                venue: "The Tabernacle",
                buyTickets: "<link to purchase tickets>"
            }]
        }]
}