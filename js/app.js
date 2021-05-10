'use strict';
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let Shops = [];

function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
function Shop(location , minNum , maxNum ,avgCookies) {
    
    this.location = location;
    this.minNum=minNum;
    this.maxNum=maxNum;
    this.avgCookies=avgCookies;

    this.customersPerHour=[];
    this.cookiesPerHour=[];
    this.totalCookies=0

    Shops.push(this);
}


Shop.prototype.numcustomersPerHour= function () {
    for (let i=0;i < hours.length;i++){
        this.customersPerHour.push(randomNumber(this.minNum,this.maxNum));
    }
}

Shop.prototype.numcookiesPerHour = function(){
    for (let i=0 ;i<hours.length;i++){
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookies));
        this.totalCookies += this.cookiesPerHour[i];
    }
}

let seattle = new Shop ('Seattle', 23, 65, 6.3);


let tokyo = new Shop ('Tokyo', 3, 24, 1.2);


let dubai = new Shop ('Dubai', 11, 38, 3.7);


let paris = new Shop ('Paris', 20, 38, 2.3);


let lima = new Shop ('Lima', 20, 38, 2.3);


let parent = document.getElementById('parent');
console.log(parent);


let table = document.createElement('table');
parent.appendChild(table);
table.setAttribute('id','tableInfo')

function theHeader() {


    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    
    let newTh = document.createElement('th');
    headerRow.appendChild(newTh);
    newTh.textContent= 'Name';
     
    for (let i =0 ; i<hours.length;i++){
        let theElement =document.createElement('th');
        headerRow.appendChild(theElement);
        theElement.textContent=hours[i];
    }
    let headerTh =document.createElement('th');
    headerRow.appendChild(headerTh);
    headerTh.textContent= 'Daily Locations Total';
}
theHeader();



Shop.prototype.render = function () {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let shopName =document.createElement('td');
    dataRow.appendChild(shopName);
    shopName.textContent=this.location;

    for (let i = 0; i < hours.length; i++) {
      let tdElement = document.createElement('td');
      dataRow.appendChild(tdElement);
      tdElement.textContent=this.cookiesPerHour[i];
        
    }

    let totalData = document.createElement('td');
    dataRow.appendChild(totalData);
    totalData.textContent=this.totalCookies;

}

for (let i =0 ;i < Shops.length;i++){
    Shops[i].numcustomersPerHour();
    Shops[i].numcookiesPerHour();
    Shops[i].render();
}

function theFooter() {
    let footerRow=document.createElement('tr');
    table.appendChild(footerRow);

    let footerTh=document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent='Totals';

let footermegaThTotal =document.createElement('th');
    footerRow.appendChild(footermegaThTotal);
footermegaThTotal.textContent=megaTotal;
    }
        

let NewCookieStandForm = document.getElementById('NewCookieStandForm');

NewCookieStandForm.addEventListener('submit' ,submitsaver);


function submitsaver(event) {
    event.preventDefault();
    
let location=event.target.location.value;
let minNum=event.target.minNum.value;
let maxNum=event.target.maxNum.value;
let avgCookies=event.target.avgCookies.value;

console.log(location,minNum,maxNum,avgCookies);

let newshop= new Shop (location, minNum, maxNum, avgCookies);

let newTable = document.getElementById('tableInfo');
newTable.removeChild(newTable.lastChild);
console.log(newTable);
  newshop.numcustomersPerHour();
  newshop.numcookiesPerHour();
  newshop.render();
  NewCookieStandForm.reset();
  theFooter();
}


    }
    let footermegaThTotal =document.createElement('th');
    footerRow.appendChild(footermegaThTotal);
footermegaThTotal.textContent=megaTotal;
    }

        
theFooter();



    
