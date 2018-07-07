'use strict';

// variable to store an array of store hours for all stores

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var firstandPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiesSold: 6.3,
  hoursOpen: storeHours,
};


var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookiesSold: 1.2,
  hoursOpen: storeHours,

};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiesSold: 3.7,
  hoursOpen: storeHours,

};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiesSold: 2.3,
  hoursOpen: storeHours,

};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiesSold: 4.6,
  hoursOpen: storeHours,
};

// variable to display all of the store objects at once

var allOfTheStores = [firstandPike, seaTac, seattleCenter, capitolHill, alki];

//     // this creates the list elements  
//     // this populates the list

function generateList() {
  var ulEl = document.getElementById('firstandPike');
  var liEl = document.createElement('li');

  for(var i = 0; i < storeHours.length; i++) {
    liEl = document.createElement('li');



//     liEl.textContent = firstandPike.customersPerHour[i];

//     // append it to the DOM
//     ulEl.appendChild(liEl);
//   }
// }

// generateList();