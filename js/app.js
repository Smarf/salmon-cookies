'use strict';

// variable to store an array of store hours for all stores

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//an array of store names

var allOfTheStores = [firstandPike, seaTac, seattleCenter, capitolHill, alki];

// A Constructor Function for Salmon Cookies Stores

function SalmonCookieStores (name, storeHours, minCust, maxCust, avgCookiesSold) {
  this.name = name;
  this.storeHours = storeHours;
  this.minCust = 0;
  this.maxCust = 0;
  this.avgCookiesSold = avgCookiesSold;
  this.salesSim = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.averagePerHour = function() {
    return this.firstandPikeSaleSim() * this.avgCookiesSold;
  };
}

var firstandPike = new SalmonCookieStores('firstandPike', storeHours, 23, 65, 6.3);
var seaTac = new SalmonCookieStores('seaTac', storeHours, 3, 24, 1.2);
var seattleCenter = SalmonCookieStores('seattleCenter', storeHours, 11, 38, 3.7);
var capitolHill =  SalmonCookieStores('capitolHill', storeHours, 20, 38, 2.3);
var alki = SalmonCookieStores('alki', storeHours, 2, 16, 4.6);

console.log('check if the Sales Sim function is working on the firstandPike object',SalmonCookieStores.salesSim(firstandPike.minCust,firstandPike.maxCust));

// // SalmonCookieStores.name = [firstandPike, seaTac, seattleCenter, capitolHill, alki];


// // a list of object literals that represent each store

// var firstandPike = {
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesSold: 6.3,
//   firstandPikeSaleSim: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   averagePerHour: function() {
//     return this.firstandPikeSaleSim() * this.avgCookiesSold;
//   },

//   generateList: function() {
//     var ulEl = document.getElementById('firstandPike');
//     var runningTotal = 0;

//     for(var i = 0; i < StoreHours.length; i++) {

//       // this creates the list elements
//       var liEl = document.createElement('li');

//       // this populates the list
//       liEl.textContent = this.averagePerHour();

//       // append it to the DOM
//       ulEl.appendChild(liEl);
//     }
//   },
// };


// /* I couldn't get the "cookietest" function to work inside of the object, even when I used "this.getRandomInt" but it works outside of the firstandPike object so that's why it's there

// var firstandPikeSaleSim = firstandPike.getRandomInt(firstandPike.minCust,firstandPike.maxCust);

// console.log(firstandPikeSaleSim);

//  console.log(firstandPikeSaleSim) proof it worked */

// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesSold: 1.2,
//   getRandomInt: function(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// var seaTacSaleSim = seaTac.getRandomInt(seaTac.minCust, seaTac.maxCust);

// var seattleCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesSold: 3.7,
//   getRandomInt: function(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// var seattleCentersalesSim = seattleCenter.getRandomInt(seattleCenter.minCust, seattleCenter.maxCust);

// var capitolHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesSold: 2.3,
//   getRandomInt: function(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// var capitolHillsalesSim = capitolHill.getRandomInt(capitolHill.minCust, capitolHill.maxCust);


// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesSold: 4.6,
//   getRandomInt: function(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// var alkiSalesSim = alki.getRandomInt(alki.minCust, alki.maxCust);
