'use strict';

// variable to store an array of store hours for all stores

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var firstandPike = {
  name: 'First and Pike Store',
  minCust: 23,
  maxCust: 65,
  avgCookiesSold: 6.3,
  hoursOpen: storeHours,
  // function renderInfo() {
  //   var ulEl = document.getElementById('firstandPike');
  //   for (var i = 0; i < 5; i++) {
  //     var liEl = document.createElement('li');
  //     liEl.textContent =
  //   }
  // }
};


var seaTac = {
  name: 'SeaTac Store',
  minCust: 3,
  maxCust: 24,
  avgCookiesSold: 1.2,
  hoursOpen: storeHours,

};

var seattleCenter = {
  name: 'Seattle Center Store',
  minCust: 11,
  maxCust: 38,
  avgCookiesSold: 3.7,
  hoursOpen: storeHours,

};

var capitolHill = {
  name: 'Capitol Hill Store',
  minCust: 20,
  maxCust: 38,
  avgCookiesSold: 2.3,
  hoursOpen: storeHours,

};

var alki = {
  name: 'Alki Store',
  minCust: 2,
  maxCust: 16,
  avgCookiesSold: 4.6,
  hoursOpen: storeHours,
};

// variable to display all of the store objects at once

var allOfTheStores = [firstandPike, seaTac, seattleCenter, capitolHill, alki];

//     // this creates the list elements
//     // this populates the list

function generatefirstandPike() {
  var ulEl = document.getElementById('firstandPike');
  var liEl1 = document.createElement('li');
  var liEl2 = document.createElement('li');
  var liEl3 = document.createElement('li');
  var liEl4 = document.createElement('li');
  liEl1.textContent = 'Minimum Customers Per Hour: ' + firstandPike.minCust;
  ulEl.appendChild(liEl1);
  liEl2.textContent = 'Maximum Customers Per Hour: ' + firstandPike.maxCust;
  ulEl.appendChild(liEl2);
  liEl3.textContent = 'Average Cookies Sold: ' + firstandPike.avgCookiesSold;
  ulEl.appendChild(liEl3);
  liEl4.textContent = 'Store Hours: ' + firstandPike.hoursOpen;
  ulEl.appendChild(liEl4);
}

function generateseaTac() {
  var ulEl = document.getElementById('seaTac');
  var liEl1 = document.createElement('li');
  var liEl2 = document.createElement('li');
  var liEl3 = document.createElement('li');
  var liEl4 = document.createElement('li');
  liEl1.textContent = 'Minimum Customers Per Hour: ' + seaTac.minCust;
  ulEl.appendChild(liEl1);
  liEl2.textContent = 'Maximum Customers Per Hour: ' + seaTac.maxCust;
  ulEl.appendChild(liEl2);
  liEl3.textContent = 'Average Cookies Sold: ' + seaTac.avgCookiesSold;
  ulEl.appendChild(liEl3);
  liEl4.textContent = 'Store Hours: ' + seaTac.hoursOpen;
  ulEl.appendChild(liEl4);
}


function generateseattleCenter() {
  var ulEl = document.getElementById('seattleCenter');
  var liEl1 = document.createElement('li');
  var liEl2 = document.createElement('li');
  var liEl3 = document.createElement('li');
  var liEl4 = document.createElement('li');
  liEl1.textContent = 'Minimum Customers Per Hour: ' + seattleCenter.minCust;
  ulEl.appendChild(liEl1);
  liEl2.textContent = 'Maximum Customers Per Hour: ' + seattleCenter.maxCust;
  ulEl.appendChild(liEl2);
  liEl3.textContent = 'Average Cookies Sold: ' + seattleCenter.avgCookiesSold;
  ulEl.appendChild(liEl3);
  liEl4.textContent = 'Store Hours: ' + seattleCenter.hoursOpen;
  ulEl.appendChild(liEl4);
}


function generatecapitolHill() {
  var ulEl = document.getElementById('capitolHill');
  var liEl1 = document.createElement('li');
  var liEl2 = document.createElement('li');
  var liEl3 = document.createElement('li');
  var liEl4 = document.createElement('li');
  liEl1.textContent = 'Minimum Customers Per Hour: ' + capitolHill.minCust;
  ulEl.appendChild(liEl1);
  liEl2.textContent = 'Maximum Customers Per Hour: ' + capitolHill.maxCust;
  ulEl.appendChild(liEl2);
  liEl3.textContent = 'Average Cookies Sold: ' + capitolHill.avgCookiesSold;
  ulEl.appendChild(liEl3);
  liEl4.textContent = 'Store Hours: ' + capitolHill.hoursOpen;
  ulEl.appendChild(liEl4);
}


function generatealki() {
  var ulEl = document.getElementById('alki');
  var liEl1 = document.createElement('li');
  var liEl2 = document.createElement('li');
  var liEl3 = document.createElement('li');
  var liEl4 = document.createElement('li');
  liEl1.textContent = 'Minimum Customers Per Hour: ' + alki.minCust;
  ulEl.appendChild(liEl1);
  liEl2.textContent = 'Maximum Customers Per Hour: ' + alki.maxCust;
  ulEl.appendChild(liEl2);
  liEl3.textContent = 'Average Cookies Sold: ' + alki.avgCookiesSold;
  ulEl.appendChild(liEl3);
  liEl4.textContent = 'Store Hours: ' + alki.hoursOpen;
  ulEl.appendChild(liEl4);
}

generatefirstandPike();
generateseaTac();
generateseattleCenter();
generatecapitolHill();
generatealki();