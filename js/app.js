'use strict'
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const seattle = {
    location:'Seattle',
    minNum: 23,
    maxNum: 65,
    avgCookies:6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalCookies:0 ,

numcustomersPerHour :function () {
    for (let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minNum,this.maxNum));
    }
},

numcookiesPerHour:function(){
    for (let i=0 ;i<hours.length;i++){
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookies));
        this.totalCookies += this.cookiesPerHour[i];
    }
},
renderFunction: function(){
    let theParent=document.getElementById('parent');
    console.log(theParent);
    let shopList = document.createElement('h2');

    theParent.appendChild(shopList);
    shopList.textContent=this.location ;

    
    let ulList = document.createElement('ul');
    theParent.appendChild(ulList);

    for (let i=0 ; i<hours.length;i++){
        let list = document.createElement('li');
        ulList.appendChild(list);
        list.textContent= hours[i] + ' :' + seattle.cookiesPerHour[i] + 'cookies'; 
    }
    let totalCookies = document.createElement('li');
    ulList.appendChild(totalCookies);
    totalCookies.textContent='Total :' + seattle.totalCookies + ' cookies'
}
}
console.log(seattle);
seattle.numcustomersPerHour();
seattle.numcookiesPerHour();
seattle.renderFunction();

const tokyo = {
    location:'Tokyo',
    minNum: 3,
    maxNum: 24,
    avgCookies:1.2,
    customersPerHour:[],
    cookiesPerHour:[],
    totalCookies:0 ,

numcustomersPerHour :function () {
    for (let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minNum,this.maxNum));
    }
},

numcookiesPerHour:function(){
    for (let i=0 ;i<hours.length;i++){
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookies));
        this.totalCookies += this.cookiesPerHour[i];
    }
},
renderFunction: function(){
    let theParent=document.getElementById('parent');
    console.log(theParent);
    let shopList = document.createElement('h2');

    theParent.appendChild(shopList);
    shopList.textContent=this.location ;

    
    let ulList = document.createElement('ul');
    theParent.appendChild(ulList);

    for (let i=0 ; i<hours.length;i++){
        let list = document.createElement('li');
        ulList.appendChild(list);
        list.textContent= hours[i] + ' :' + tokyo.cookiesPerHour[i] + 'cookies'; 
    }
    let totalCookies = document.createElement('li');
    ulList.appendChild(totalCookies);
    totalCookies.textContent='Total :' + tokyo.totalCookies + ' cookies'
}
}
console.log(tokyo);
tokyo.numcustomersPerHour();
tokyo.numcookiesPerHour();
tokyo.renderFunction();


const dubai = {
    location:'Dubai',
    minNum: 11,
    maxNum: 38,
    avgCookies:3.7,
    customersPerHour:[],
    cookiesPerHour:[],
    totalCookies:0 ,

numcustomersPerHour :function () {
    for (let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minNum,this.maxNum));
    }
},

numcookiesPerHour:function(){
    for (let i=0 ;i<hours.length;i++){
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookies));
        this.totalCookies += this.cookiesPerHour[i];
    }
},
renderFunction: function(){
    let theParent=document.getElementById('parent');
    console.log(theParent);
    let shopList = document.createElement('h2');

    theParent.appendChild(shopList);
    shopList.textContent=this.location ;

    
    let ulList = document.createElement('ul');
    theParent.appendChild(ulList);

    for (let i=0 ; i<hours.length;i++){
        let list = document.createElement('li');
        ulList.appendChild(list);
        list.textContent= hours[i] + ' :' + dubai.cookiesPerHour[i] + 'cookies'; 
    }
    let totalCookies = document.createElement('li');
    ulList.appendChild(totalCookies);
    totalCookies.textContent='Total :' + dubai.totalCookies + ' cookies'
}
}
console.log(dubai);
dubai.numcustomersPerHour();
dubai.numcookiesPerHour();
dubai.renderFunction();

const paris = {
    location:'Paris',
    minNum: 20,
    maxNum: 38,
    avgCookies:3.7,
    customersPerHour:[],
    cookiesPerHour:[],
    totalCookies:0 ,

numcustomersPerHour :function () {
    for (let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minNum,this.maxNum));
    }
},

numcookiesPerHour:function(){
    for (let i=0 ;i<hours.length;i++){
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookies));
        this.totalCookies += this.cookiesPerHour[i];
    }
},
renderFunction: function(){
    let theParent=document.getElementById('parent');
    console.log(theParent);
    let shopList = document.createElement('h2');

    theParent.appendChild(shopList);
    shopList.textContent=this.location ;

    
    let ulList = document.createElement('ul');
    theParent.appendChild(ulList);

    for (let i=0 ; i<hours.length;i++){
        let list = document.createElement('li');
        ulList.appendChild(list);
        list.textContent= hours[i] + ' :' + paris.cookiesPerHour[i] + 'cookies'; 
    }
    let totalCookies = document.createElement('li');
    ulList.appendChild(totalCookies);
    totalCookies.textContent='Total :' + paris.totalCookies + ' cookies'
}
}
console.log(paris);
paris.numcustomersPerHour();
paris.numcookiesPerHour();
paris.renderFunction();

const lima = {
    location:'Lima',
    minNum: 2,
    maxNum: 16,
    avgCookies:4.6,
    customersPerHour:[],
    cookiesPerHour:[],
    totalCookies:0 ,

numcustomersPerHour :function () {
    for (let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minNum,this.maxNum));
    }
},

numcookiesPerHour:function(){
    for (let i=0 ;i<hours.length;i++){
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookies));
        this.totalCookies += this.cookiesPerHour[i];
    }
},
renderFunction: function(){
    let theParent=document.getElementById('parent');
    console.log(theParent);
    let shopList = document.createElement('h2');

    theParent.appendChild(shopList);
    shopList.textContent=this.location ;

    
    let ulList = document.createElement('ul');
    theParent.appendChild(ulList);

    for (let i=0 ; i<hours.length;i++){
        let list = document.createElement('li');
        ulList.appendChild(list);
        list.textContent= hours[i] + ' :' + lima.cookiesPerHour[i] + 'cookies'; 
    }
    let totalCookies = document.createElement('li');
    ulList.appendChild(totalCookies);
    totalCookies.textContent='Total :' + lima.totalCookies + ' cookies'
}
}
console.log(lima);
lima.numcustomersPerHour();
lima.numcookiesPerHour();
lima.renderFunction();


