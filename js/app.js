'use strict'
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Shops(locations ,min , max , avgCookiesale){


    this.location = location ;
    this.min = min ;
    this.max = max ;
    this.avgCookiesale = avgCookiesale ;
    this.randomHour = [];
    this.dailySales = 0 ;
    this.randomCustomer() ;
    this.hourSales() ;

    
}
Shops.prototype.randomCustomer=function(){
    let range =this.max-this.min;
       let  randomCount=Math.random() * range + this.min;
         return Math.floor(randomCount);
    
}
Shops.prototype.hourSales=function(){
    for (let i=0;i<hours.length;i++){
           
     let cookiesNum= Math.floor(this.randomCustomer() *this.avgCookiesale);
    this.randomHour.push(cookiesNum);
        this.dailySales += cookiesNum ;

}
}
let Seattle = new Shops ('Seattle', 23 ,65,6.3);
let Tokyo = new Shops ('Tokyo', 3,24,1.2);
let Dubai = new Shops ('Dubai', 11 ,38,3.7);
let Paris = new Shops ('Paris', 30 ,38,2.3);
let Lima = new Shops ('Lima', 2 ,16,4.6);

let shopList = [Seattle,Tokyo,Dubai,Paris,Lima];
console.log (Seattle);
Seattle.hourSales();
console.log(Tokyo);
Tokyo.hourSales();
console.log(Dubai);
Dubai.hourSales();
console.log(Paris);
Paris.hourSales();
console.log(Lima);
Lima.hourSales();

let theParent = document.getElementById('CookiesShops');
Shops.prototype.render=function(){
let theTabel = document.createElement('table');
theParent.appendChild(theTabel);

let theHeader = document.createElement('tr');
theTabel.appendChild(theHeader);
let th=document.createElement('th');
theHeader.appendChild(th);
th.textContent = '.........';
for (let i=0;i<hours.length;i++){
    let th = document.createElement('th');
    theHeader.appendChild(th);
    th.textContent= hours[i];

// let th = document.createElement('th');
theHeader.appendChild(th);
th.textContent ='Daily location total';



for (let shopIndex = 0 ; shopIndex<shopList.length;shopIndex++){
    let currentShop = shopList[shopIndex];
    let shopRow =document.createElement('tr');
    theTabel.appendChild(shopRow);
    let shopName = document.createElement('td');
    shopRow.appendChild(shopName);
    shopName.textContent=currentShop.location;


for (let cellIndex = 0; cellIndex < hours.length; cellIndex++) {
    let info = document.createElement('td');
        shopRow.appendChild(info);
        info.textContent = currentShop.randomHour[cellIndex];
 
}
shopName= document.createElement('td');
    shopRow.appendChild(shopName);
    shopName.textContent = currentShop.dailySales;
}
let footerRow = document.createElement('tr');
theTable.appendChild(footerRow);
// let th = document.createElement('th');
footerRow.appendChild(th);
th.textCntent = 'Totals';

let TotalSalesCookies = 0;
for (let hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    let td = document.createElement('td');
    footerRow.appendChild(td);
    let sum = 0;
    for (let shopIndexCell = 0; shopIndexCell < shopList.length; shopIndexCell++) {
        let currentShop = shopList[shopIndexCell];

        sum += currentShop.randomHour[hourIndex];
    }
    td.textContent = sum;
    TotalSalesCookies += sum;
}
let td = document.createElement('td');
footerRow.appendChild(td);
td.textContent = TotalSalesCookies;
}
}
