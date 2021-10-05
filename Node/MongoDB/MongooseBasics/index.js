const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp',{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("CONNECTION OPEN")
})
.catch(err => {
    console.log("OH NO ERROR")
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
/* const amadeus = new Movie({ title:'Amadeous', year:1986, score: 9.2, rating:'R'});
 */ 

/* Movie.insertMany([
    {title:'3 idiots', year:2009, score: 8.4,rating: 'A'},
    {title:'Drishyam 2', year:2021 , score: 8.3 ,rating: 'AA'},
    {title:'Taaare zamin par', year:2007 , score:8.3 ,rating: 'A+'},
    {title:'Anand', year:1971 , score:8.2 ,rating: 'A'},
    {title:'Airlift', year:2016 , score:7.8 ,rating: 'AA+'}
])
.then( data => {
    console.log("IT WORKED")
    console.log(data)
}) */