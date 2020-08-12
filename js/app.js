'use strict'

console.log('customers')




var storesHourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

var seattle = {
  name: "Seattle",
  miniCrust: 23,
  maxCrust: 65,
  avgCookieSale: 6.3,
  store: true,
  dailySales:[],
  numOfCust: function (){
    return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min)
  },
  sales: function(custperhour) {
    return Math.ceil(custperhour * this.avg);
},
generatedDailySales:function(){
for (var i = 0; i < storesHourArr.length; i++){
  var customers = this.numOfCust()
  var saleCookies = this.sales(customers)
  this.dailySales.push(saleCookies)
 }
},

render: function(){
  var list = document.getElementById("Sale");
  var listElemet = document.createElement("li");
  listElemet.textContent = this.name;
  list.appendChild(listElement);
  for (var i = 0; i < storesHourArr.length; i++){
    var time = document.createElement('li');
    time.textContent = '${storeHourArr[i]:}: ${this.dailySales[i]} cookies'
    list.appendChild(time);
  }


  var Toyoko = {
    name: "Toyoko",
    miniCrust: 3,
    maxCrust: 24,
    avgCookieSale: 1.2,
    store: true,
    dailySales:[],
    numOfCust: function (){
      return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min)
    },
    sales: function(custperhour) {
      return Math.ceil(custperhour * this.avg);
  },
  generatedDailySales:function(){
  for (var i = 0; i < storesHourArr.length; i++){
    var customers = this.numOfCust()
    var saleCookies = this.sales(customers)
    this.dailySales.push(saleCookies)
   }
  },
  
  render: function(){
    var list = document.getElementById("Sale");
    var listElemet = document.createElement("li");
    listElemet.textContent = this.name;
    list.appendChild(listElement);
    for (var i = 0; i < storesHourArr.length; i++){
      var time = document.createElement('li');
      time.textContent = '${storeHourArr[i]:}: ${this.dailySales[i]} cookies'
      list.appendChild(time);
    }
  

  
}


  var Dubai = {
    name: "Dubai",
    miniCrust: 11,
    maxCrust: 38,
    avgCookieSale: 3.7,
    store: true,
    dailySales:[],
    numOfCust: function (){
      return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min)
    },
    sales: function(custperhour) {
      return Math.ceil(custperhour * this.avg);
  },
  generatedDailySales:function(){
  for (var i = 0; i < storesHourArr.length; i++){
    var customers = this.numOfCust()
    var saleCookies = this.sales(customers)
    this.dailySales.push(saleCookies)
   }
  },
  
  render: function(){
    var list = document.getElementById("Sale");
    var listElemet = document.createElement("li");
    listElemet.textContent = this.name;
    list.appendChild(listElement);
    for (var i = 0; i < storesHourArr.length; i++){
      var time = document.createElement('li');
      time.textContent = '${storeHourArr[i]:}: ${this.dailySales[i]} cookies'
      list.appendChild(time);
    }


}


  var Paris = {
    name: "Paris",
    miniCrust: 20,
    maxCrust: 38,
    avgCookieSale: 2.3,
    store: true,
    dailySales:[],
    numOfCust: function (){
      return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min)
    },
    sales: function(custperhour) {
      return Math.ceil(custperhour * this.avg);
  },
  generatedDailySales:function(){
  for (var i = 0; i < storesHourArr.length; i++){
    var customers = this.numOfCust()
    var saleCookies = this.sales(customers)
    this.dailySales.push(saleCookies)
   }
  },
  
  render: function(){
    var list = document.getElementById("Sale");
    var listElemet = document.createElement("li");
    listElemet.textContent = this.name;
    list.appendChild(listElement);
    for (var i = 0; i < storesHourArr.length; i++){
      var time = document.createElement('li');
      time.textContent = '${storeHourArr[i]:}: ${this.dailySales[i]} cookies'
      list.appendChild(time);
    }


}

  var Lima = {
    name: "Lima",
    miniCrust: 2,
    maxCrust: 16,
    avgCookieSale: 4.6,
    store: true,
    dailySales:[],
    numOfCust: function (){
      return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min)
    },
    sales: function(custperhour) {
      return Math.ceil(custperhour * this.avg);
  },
  generatedDailySales:function(){
  for (var i = 0; i < storesHourArr.length; i++){
    var customers = this.numOfCust()
    var saleCookies = this.sales(customers)
    this.dailySales.push(saleCookies)
   }
  },
  
  render: function(){
    var list = document.getElementById("Sale");
    var listElemet = document.createElement("li");
    listElemet.textContent = this.name;
    list.appendChild(listElement);
    for (var i = 0; i < storesHourArr.length; i++){
      var time = document.createElement('li');
      time.textContent = '${storeHourArr[i]:}: ${this.dailySales[i]} cookies'
      list.appendChild(time);
    }
}


  seattle.custPerHour();
  console.log(sales(30, 6.3), custPerHour(23, 65))
  // random num of customers

