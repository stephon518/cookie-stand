'use strict';

var timeArry = [];
for (var t=0; t<14; t++){
  if (t<6){
    var varTime = `${t+6}am:`;
    timeArry.push(varTime);
  }else if(t === 6){
    var varTime2 = `${t+6}pm:`;
    timeArry.push(varTime2);
  }else if(t>6){
    var varTime3 = `${t-6}pm:`;
    timeArry.push(varTime3);
  }
}

var cityArry=[];

var parentTable = document.getElementById('table');

var fishForm = document.getElementById('form');

function City(name, minCookie, maxCookie, avgSale){
  this.cityName = name;
  this.minCookie = minCookie;
  this.maxCookie = maxCookie;
  this.avgSale = avgSale;
  this.hourlyCustomer = []; 
  this.randomHourSale = [];
  this.totalCookiesPerDay = 0;
  cityArry.push(this); 
}
var seattle = new City('Seattle',23, 65, 6.3); 
var tokyo = new City('Tokyo',3, 24, 1.2);
var dubai = new City('Dubai',11, 38, 3.7);
var paris = new City('Paris',20, 38, 2.3);
var lima = new City('Lima',2, 16, 4.6);


function formSubmit(event){
  event.preventDefault();
  console.log('this is mylocationName.value', event.target.locationName.value);
  console.log('this is my minCookies.value', event.target.minCookies.value);
  console.log('this is my maxCookies.value', event.target.maxCookies.value);
  console.log('this is my avgPerCustomer.value', event.target.avgPerCustomer.value);
  var inputLocation = event.target.locationName.value;
  var inputMin = parseInt(event.target.minCookies.value);
  var inputMax= parseInt(event.target.maxCookies.value);
  var inputAvgPerCustomer = parseInt(event.target.avgPerCustomer.value);
  new City(inputLocation, inputMin, inputMax, inputAvgPerCustomer);
  console.log(cityArry);
  
  parentTable.innerHTML = '';
  cookieMath();
  generateHeader();
  generateContent();
  generateFooter();
}
fishForm.addEventListener('submit', formSubmit);

City.prototype.randomCustomer = function(){
  return Math.ceil(Math.random() * (this.maxCookie - this.minCookie + 1)) + this.minCookie;
};

function cookieMath(){
  for(var i=0; i<cityArry.length; i++){
    var total = 0;
    
    for(var j=0; j<timeArry.length; j++){
    
      var hourCust = cityArry[i].randomCustomer();
      
      var hourSale = hourCust*cityArry[i].avgSale;
      
      cityArry[i].randomHourSale.push(Math.ceil(hourSale));
      total += hourSale;
    }
   
    cityArry[i].totalCookiesPerDay = Math.ceil(total);
  
  }
}
cookieMath();

function generateHeader(){
  
  var tableRow = document.createElement('tr');
  
  var tableHead = document.createElement('th');
  
  tableHead.textContent = ' ';
  
  tableRow.appendChild(tableHead);
  
  parentTable.appendChild(tableRow);
  for(var i=0; i<timeArry.length; i++){
    
    var tableHead2 = document.createElement('th');
    
    tableHead2.textContent = `${timeArry[i]}`;
    
    tableRow.appendChild(tableHead2);
  }
  
  var tableHead3 = document.createElement('th');
  tableHead3.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHead3);
}


City.prototype.renderTableList = function(){
  
  var tableRow = document.createElement('tr');
  
  parentTable.appendChild(tableRow);
 
  var tableData = document.createElement('td');
  
  tableData.textContent = this.cityName;
  
  tableRow.appendChild(tableData);
  for(var i=0; i<timeArry.length; i++){
    
    var cookieData = document.createElement('td');
    
    cookieData.textContent = this.randomHourSale[i];
    
    tableRow.appendChild(cookieData);
  }
  
  
  var totalData = document.createElement('td');
  totalData.textContent = this.totalCookiesPerDay;
  
  tableRow.appendChild(totalData);
};

function generateFooter(){
  
  var tableRow = document.createElement('tr');
  
  parentTable.appendChild(tableRow);
  
  var tableData = document.createElement('td');
  
  tableData.textContent = 'Hourly Total';
  
  tableRow.appendChild(tableData);
  
  var grandTotal = 0;
  for(var i=0; i<timeArry.length; i++){
    
    var cookieData = document.createElement('td');
    var dailyCookies = 0;
    for(var j=0; j<cityArry.length; j++){
      
      dailyCookies += cityArry[j].randomHourSale[i];
      
      tableRow.appendChild(cookieData);
    }
    cookieData.textContent = dailyCookies;
    tableRow.appendChild(cookieData);
  }
  
  var totalData = document.createElement('td');
 
  for(var n=0; n<cityArry.length; n++){
    grandTotal += cityArry[n].totalCookiesPerDay;
  }
  totalData.textContent = grandTotal;
  
  tableRow.appendChild(totalData);
}


function generateContent(){
  for(var n=0; n<cityArry.length; n++){
    cityArry[n].renderTableList();
    
}



generateHeader();

generateContent();
generateFooter();
