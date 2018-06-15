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
  },
  averagePerHour: function() {
    return this.salesSimulator() * this.avgCookiesSold;
  },
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
  },
};
   
var seattleCenter = {
minCust: 11,
maxCust: 38,
avgCookiesSold: 3.7,
customersPerHour: [],
  customersPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },
  averagePerHour: function() {
    return this.customersPerHour() * this.avgCookiesSold;
  },
};
        
var capitolHill = {
minCust: 20,
maxCust: 38,
avgCookiesSold: 2.3,
customersPerHour: [],
  customersPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },
  averagePerHour: function() {
    return this.customersPerHour() * this.avgCookiesSold;
  },
},

var alki = {
minCust: 2,
maxCust: 16,
avgCookiesSold: 4.6,
customersPerHour: [],
  customersPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },
  averagePerHour: function() {
    return this.customersPerHour() * this.avgCookiesSold;
  },
};

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
                    
                    /* to complete this, you're going to have to use the append.child function to update the DOM, which won't change your HTML but we'll get to that tomorrow */