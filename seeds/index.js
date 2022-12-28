const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seeDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '63860d9ac1f2314a7b641746',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Acampamento bonito, bem organizado e ótimo para donos de pet.',
            price,
            geometry: {
                type : "Point", 
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dlh8ttprl/image/upload/v1670327681/YelpCamp/tiuzjxbgnb6nduwkc09u.jpg',
                    filename: 'YelpCamp/tiuzjxbgnb6nduwkc09u'
                  },
                  {
                    url: 'https://res.cloudinary.com/dlh8ttprl/image/upload/v1670327682/YelpCamp/a1ak8fu6n3lk4hxwseho.jpg',
                    filename: 'YelpCamp/a1ak8fu6n3lk4hxwseho'
                  }
            ]
        })
        await camp.save();
    }
}

seeDB().then(() => {
    mongoose.connection.close();
})

