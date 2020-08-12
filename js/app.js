  
'useStrict';
// proof of life
console.log('cookies');
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
var allLocations = [];
var parent = document.getElementById('table');



  
function Location(minCust, maxCust, avgCookieSale, locationName){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.location = locationName;
  this.totalCookiesForTheDay = 0;
  this.custEachHour = [];
  this.cookiesSoldEachHour = [];
  allLocations.push(this);
}

Location.prototype.calculateCustEachHour = function(){
  

  for(var i=0; i<storeHoursArr.length; i++){
    var customers = getRandNumber(this.minCustomers, this.maxCustomers);
    this.customersEachHour.push(customers);
  }
}


Location.prototype.calculateCookiesSoldEachHour = function(){
  
  for(var i=0; i<this.custEachHour.length; i++){
    var cookiesSoldForOneHour = Math.ceil(this.averageCookieSale * this.custEachHour[i]);
    this.cookiesSoldEachHour.push(cookiesSoldForOneHour);
    this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldForOneHour;
  }
}


Location.prototype.render = function(){
  
  var tableRow = document.createElement('tr');

  
  for(var i=0; i<storeHoursArr.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);
  }
  
  var totalDailySales = document.createElement('td');
  totalDailySales.textContent = this.totalCookiesForTheDay;
  tableRow.appendChild(totalDailySales);
  parent.appendChild(tableRow);
}


var seattle = new Location(23, 65, 6.3, 'Seattle');
var tokyo = new Location(3, 24, 1.2, 'Tokyo');
var dubai = new Location(11, 38, 3.7, 'Dubai');
var paris = new Location(20, 38, 2.3, 'Paris');


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function genHeader(){
  
  var tableRow = document.createElement('tr');

  
  for(var i=0; i<storeHoursArr.length; i++){
    var tableHeader = document.createElement('th');
    tableHeader.textContent = storeHoursArr[i];
    tableRow.appendChild(tableHeader);
  }

  
  parent.appendChild(tableRow);
}

function generateContent(){
  for(var i = 0; i<allLocations.length; i++){
    allLocations[i].calculateCustomersEachHour();
    allLocations[i].calculateCookiesSoldEachHour();
    allLocations[i].render();
  }
}

generateHeader();
generateContent();