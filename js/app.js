'use strict';

// variable to store an array of store hours for all stores

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var allOfTheStores = [firstandPike, seaTac, seattleCenter, capitolHill, alki];

// a list of object literals that represent each store
// note that storeObject.customersPerHour generates an array which simulates cookie sold *per hour*

var firstandPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiesSold: 6.3,
  customersPerHour: [],
  salesSimulator: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  // averagePerHour: function() {
  //   firstandPike.customersPerHour * this.avgCookiesSold;
  // }
  }
};


var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookiesSold: 1.2,
  customersPerHour: [],
  salesSimulator: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },
  averagePerHour: function() {
    return this.salesSimulator() * this.avgCookiesSold;
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiesSold: 3.7,
  customersPerHour: [],
  salesSimulator: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },
  averagePerHour: function() {
    return this.customersPerHour() * this.avgCookiesSold;
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiesSold: 2.3,
  customersPerHour: [],
  salesSimulator: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },
  averagePerHour: function() {
    return this.customersPerHour() * this.avgCookiesSold;
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiesSold: 4.6,
  customersPerHour: [],
  salesSimulator: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },
  averagePerHour: function() {
    return this.customersPerHour() * this.avgCookiesSold;
  }
};

firstandPike.salesSimulator();
// seaTac.salesSimulator();
// seattleCenter.salesSimulator();
// capitolHill.salesSimulator();
// alki.salesSimulator();


// function generateList() {
//   var ulEl = document.getElementById('firstandPike');
//   var liEl = document.createElement('li');

//   for(var i = 0; i < storeHours.length; i++) {
//     liEl = document.createElement('li');

//     // this creates the list elements  
//     // this populates the list

//     liEl.textContent = firstandPike.customersPerHour[i];

//     // append it to the DOM
//     ulEl.appendChild(liEl);
//   }
// }

// generateList();