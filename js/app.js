'use strict'
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
//    console.log(this.customersPerHour);
}

Shop.prototype.numcookiesPerHour = function(){
    for (let i=0 ;i<hours.length;i++){
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookies));
        this.totalCookies += this.cookiesPerHour[i];
    }
}

let seattle = new Shop ('Seattle', 23, 65, 6.3);
seattle.numcustomersPerHour();
seattle.numcookiesPerHour();

let tokyo = new Shop ('Tokyo', 3, 24, 1.2);
tokyo.numcustomersPerHour();
tokyo.numcookiesPerHour();

let dubai = new Shop ('Dubai', 11, 38, 3.7);
dubai.numcustomersPerHour();
dubai.numcookiesPerHour();

let paris = new Shop ('Paris', 20, 38, 2.3);
paris.numcustomersPerHour();
paris.numcookiesPerHour();

let lima = new Shop ('Lima', 20, 38, 2.3);
lima.numcustomersPerHour();
lima.numcookiesPerHour();

let parent = document.getElementById('parent');
console.log(parent);

let table = document.createElement('table');
parent.appendChild(table);

function theHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let newTh = document.createElement('th');
    headerRow.appendChild(newTh);
    newTh.textContent= 'Name';

    let newTh1 = document.createElement('th');
    headerRow.appendChild(newTh1);
    newTh1.textContent= '6 AM';

    let newTh2 = document.createElement('th');
    headerRow.appendChild(newTh2);
    newTh2.textContent= '7 AM';

    let newTh3 = document.createElement('th');
    headerRow.appendChild(newTh3);
    newTh3.textContent= '8 AM';

    let newTh4 = document.createElement('th');
    headerRow.appendChild(newTh4);
    newTh4.textContent= '9 AM';

    let newTh5 = document.createElement('th');
    headerRow.appendChild(newTh5);
    newTh5.textContent= '10 AM';

    let newTh6 = document.createElement('th');
    headerRow.appendChild(newTh6);
    newTh6.textContent= '11 AM';

    let newTh7 = document.createElement('th');
    headerRow.appendChild(newTh7);
    newTh7.textContent= '12 PM';

    let newTh8 = document.createElement('th');
    headerRow.appendChild(newTh8);
    newTh8.textContent= '1 PM';

    let newTh9 = document.createElement('th');
    headerRow.appendChild(newTh9);
    newTh9.textContent= '2 PM';

    let newTh10 = document.createElement('th');
    headerRow.appendChild(newTh10);
    newTh10.textContent= '3 PM';

    let newTh11 = document.createElement('th');
    headerRow.appendChild(newTh11);
    newTh11.textContent= '4 PM';

    let newTh12 = document.createElement('th');
    headerRow.appendChild(newTh12);
    newTh12.textContent= '5 PM';

    let newTh13 = document.createElement('th');
    headerRow.appendChild(newTh13);
    newTh13.textContent= '6 PM';

    let newTh14 = document.createElement('th');
    headerRow.appendChild(newTh14);
    newTh14.textContent= '7 PM';

    let newTh15 = document.createElement('th');
    headerRow.appendChild(newTh15);
    newTh15.textContent= 'Daily Location Total';
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


        for (let i = 0; i < hours.length; i++) {
        let totalCookies = 0;
            for (let j = 0; j < Shops.length; j++) {
                totalCookies+=Shops[j].cookiesPerHour[i];
            
        }
        let footerThTotal =document.createElement('th');
        footerRow.appendChild(footerThTotal);
    footerThTotal.textContent=totalCookies;

    
        }
    }
        


    

theFooter();

let NewCookieStandForm = document.getElementById('NewCookieStandForm');
NewCookieStandForm.addEventListener('submit' , saver);

function saver(event) {
    event.preventDefault();
    // console.log('hi', event);
  let Location=event.target.Location.value;
//   console.log(Location);
let MinimunNumberofCustomers=event.target.MinimunNumberofCustomers.value;
let MaximunNumberofCustomers=event.target.MaximunNumberofCustomers.value;
let AvaregeCookiesSale=event.target.AvaregeCookiesSale.value;


  let addedShop= new Shop (Location, MinimunNumberofCustomers, MaximunNumberofCustomers, AvaregeCookiesSale);

  addedShop.numcookiesPerHour();
  addedShop.numcustomersPerHour();
  addedShop.render();

  let container =document.getElementById('parent');
  container.textContent = '';
  for (let index = 0; index < Shops.length; index++) {
      Shops[index].numcookiesPerHour();
      Shops[index].numcustomersPerHour();
      Shops[index].render();
      
  }
}