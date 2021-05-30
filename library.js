class Media {
    constructor(title){
       this._title = title;
       this._isCheckedOut = false;
       this._ratings = [];
    }
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    getAverageRating(rate){

        let averageRate = 1;
        let ratelength = rate.length;
        for(var i in rate){
             averageRate += rate[i]
        }
        return (Math.round((averageRate + Number.EPSILON) * 1) / 1 / ratelength);
        //return averageRate / ratelength;

    }
    toggleCheckOutStatus(){

        this._isCheckedOut = true;

    }
    addRating(ratings){

        const rate =  this.ratings.push(ratings);

    }
}

    class Book extends Media{
        constructor(title,author,pages){
            super(title);
            this._author = author;
            this._pages = pages;
        }
        get author(){
            return this._author;

        }
        get pages(){
            return this._pages;

        }

    }

    // Class Movie
   class Movie extends  Media{
       constructor(title, director,runtime){
        super(title);
        this._director = director;
        this._runtime = runtime;
       }
       get director(){
           return this._director;
       }
       get runtime()
       {
           return this._runtime;
       }


   }
   class CD extends Media{
       constructor(title,artist,songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
       }
       get artist(){
           return this._artist;
       }
       get songs(){
           return this._songs;

       }
       set songs(dipina){
        const pina =  this.songs.push(dipina);
       }
   }

//Test Ouput 

//add Movie Objects
const Bishops = new Movie('New York Mafias','Van damme',250);
const Newyork = new Movie('Jozi backbackers','Peter Schiemel',400);
//const Jozithugs = new Media('We run Jozi');
console.log("=======================MOVIE OBJECTS===========");
console.log('The title of the Media object is ' + Bishops.title);
console.log('The Director of the Movie is ' + Bishops.director);
console.log('The runtime of the movie is ' + Bishops.runtime + ' minutes');
console.log('The Checkout status  of  '+ Bishops.title  + ' is ' + Bishops.isCheckedOut);
Bishops.toggleCheckOutStatus();
//now check status of the media object
console.log('The Checkout status  of  '+ Bishops.title +' is ' + Bishops.isCheckedOut);
Bishops.addRating(9.1);
Bishops.addRating(8.1);
Bishops.addRating(9);
Bishops.addRating(2);
Bishops.addRating(3);
console.log('The title of the Media object is ' + Newyork.title);
console.log('The Director of the Movie is ' + Newyork.director);
console.log('The runtime of the movie is ' + Newyork.runtime + ' minutes');
console.log('The Checkout status  of  ' + Newyork.title + ' is ' + Newyork.isCheckedOut);
Newyork.toggleCheckOutStatus();
//now check status of the media object
console.log('The Checkout status  of ' + Newyork.title + ' is ' + Newyork.isCheckedOut);
Newyork.addRating(9.1);
Newyork.addRating(8.1);
Newyork.addRating(9);
Newyork.addRating(10);
Newyork.addRating(10);
let  movierating1 = Newyork.ratings;
//let  movierating2 = Kolobe.ratings;
//let  movierating3 = Maru.ratings;
console.log('Average rating for the Movie object of '+ Newyork.title + ' is ' + Newyork.getAverageRating(movierating1));


// add Book Objects 
//const Dibuka = new Media('This book is crap');
const buka1 = new Book('This book is crap','Kennedy',350);
//const Kolobe = new Media('Maru');
const buka2 = new Book('Maru','Mokwena Masilo',25);
//const Maru = new Media('New York Mafias');
const buka3 = new Book('New York Mafias','Kennedy Mgcver',200);
console.log("=======================BOOK OBJECTS===========");
console.log('The title of the Book object is ' + buka1.title);
console.log('The Author of the book is ' + buka1.author);
console.log('The book has  ' + buka1.pages + ' pages');
console.log('The Checkout status  of  '+ buka1.title + ' is ' + buka1.isCheckedOut);
buka1.toggleCheckOutStatus();
//now check status of the media object
console.log('The Checkout status  of  ' + buka1.title  + ' is ' + buka1.isCheckedOut);
buka1.addRating(1.1);
buka1.addRating(1.1);
buka1.addRating(3.1);
buka1.addRating(45.1);
buka1.addRating(4.5);
buka2.addRating(2.1);
buka2.addRating(5.1);
buka1.addRating(8.1);
buka3.addRating(7.1);
buka2.addRating(6.5);
buka3.addRating(9.5);
buka1.addRating(6.5);
//console.log(Dibuka.ratings);
let  newavgrate = buka1.ratings;
let  newavgrate2= buka2.ratings;
let  newavgrate3 = buka3.ratings;
//console.log(Dibuka.ratings.length);
console.log('Average rating for the Book object of '+ buka1.title + ' is ' + buka1.getAverageRating(newavgrate));
console.log('Average rating for the Book object of ' + buka2.title + ' is ' + buka2.getAverageRating(newavgrate2));
console.log('Average rating for the Book object of ' + buka3.title + ' is ' + buka3.getAverageRating(newavgrate3));
//console.log('The Current rating  of the Media object is ' + Dibuka.title);



// Add CD Objects

const CD1 = new CD('Dikosha tsa sesotho','Brian mcknight',['mphoranyane','kosha','masedi a se ona']);
const CD2 = new CD('RNB haaai','Spooks H',['I can swim','ena a se yona ','Sedumo sa kgale']);
const CD3 = new CD('Deep House','Soul Morena',['But Also the Sky','Jezekel Makab','Reach me','Getting there']);
console.log("=======================CD OBJECTS===========");
console.log('The title of the cd object is ' + CD1.title);
console.log('The Artist is  ' + CD1.artist);
console.log('The songs on the CD are  ' + CD1.songs);

console.log('The Checkout status  of  '+ CD1.title + ' is ' + CD1.isCheckedOut);
CD1.toggleCheckOutStatus();
//now check status of the media object
console.log('The Checkout status  of  ' + CD1.title  + ' is ' + CD1.isCheckedOut);
CD1.addRating(1.1);
CD3.addRating(1.1);
CD1.addRating(3.1);
CD1.addRating(45.1);
CD2.addRating(4.5);
CD3.addRating(2.1);
CD1.addRating(5.1);
CD2.addRating(8.1);
CD2.addRating(7.1);
CD1.addRating(6.5);
CD2.addRating(9.5);
CD3.addRating(6.5);
//console.log(Dibuka.ratings);
let  cdrate1 = CD1.ratings;
let  cdrate2 = CD2.ratings;
let  cdrate3 = CD3.ratings;
//console.log(Dibuka.ratings.length);

console.log('Average rating for the CD object of '+ CD1.title + ' is ' + CD1.getAverageRating(cdrate1));
