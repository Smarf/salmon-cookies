'use strict';

// variable to store an array of store hours for all stores

var StoreHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//an array of store names

var allOfTheStores = [firstandPike, seaTac, seattleCenter, capitolHill, alki]

// a list of object literals that represent each store

var firstandPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiesSold: 6.3,
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  },
};

// I couldn't get the "cookietest" function to work inside of the object, even when I used "this.getRandomInt" but it works outside of the firstandPike object so that's why it's there

var firstandPikeSaleSim = firstandPike.getRandomInt(firstandPike.minCust,firstandPike.maxCust);

console.log(firstandPikeSaleSim);

// console.log(firstandPikeSaleSim) proof it worked

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookiesSold: 1.2,
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  },
};

var seaTacSaleSim = seaTac.getRandomInt(seaTac.minCust, seaTac.maxCust);

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiesSold: 3.7,
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  },
};

var seattleCentersalesSim = seattleCenter.getRandomInt(seattleCenter.minCust, seattleCenter.maxCust);

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiesSold: 2.3,
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  },
};

var capitolHillsalesSim = capitolHill.getRandomInt(capitolHill.minCust, capitolHill.maxCust);


var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiesSold: 4.6,
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  },
};

var alkiSalesSim = alki.getRandomInt(alki.minCust, alki.maxCust); 
