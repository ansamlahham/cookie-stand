'use strict'
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let cookiesofSeattle = {
    location : 'Seattle',
    min : 23 ,
    max : 65 ,
    avgCookiesale : 6.3 ,
    randomHour : [],
    dailySales : 0 ,

randomCustomer : function (){
    let range =cookiesofSeattle.max-cookiesofSeattle.min;
   let  randomCount=Math.random() * range + cookiesofSeattle.min;
     return Math.ceil(randomCount);
 },

        hourSales : function(){
        for (let i=0;i<hours.length;i++){
           
         let cookiesNum= Math.ceil(cookiesofSeattle.randomCustomer() *cookiesofSeattle.avgCookiesale);
        cookiesofSeattle.randomHour.push(cookiesNum);
        cookiesofSeattle.dailySales += cookiesNum ;
        }
        },

        render: function(){
         let theParent = document.getElementById('content-area');
         let h2 =document.createElement('h2');
         theParent.appendChild(h2);
         h2.textContent='Seattle';
         theParent.appendChild(h2);
         let list = document.createElement('ul');
         theParent.appendChild(list);
         for (let i=0;i<hours.length;i++){
             let listItem=document.createElement('li');
             listItem.textContent=hours[i]+':'+cookiesofSeattle.randomHour[i]+' cookies';
             list.appendChild(listItem);
         }

         let listItem = document.createElement('li');
         listItem.textContent='Total : ' + cookiesofSeattle.dailySales+' cookies';
         list.appendChild(listItem);
    
        },
        }

        cookiesofSeattle.hourSales();
         cookiesofSeattle.render();
    
    let cookiesofTokyo = {
            location : 'Tokyo',
            min : 3 ,
            max : 24 ,
            avgCookiesale : 1.2 ,
            randomHour : [],
            dailySales : 0 ,
        
        randomCustomer : function (){
            let range =cookiesofTokyo.max-cookiesofTokyo.min;
           let  randomCount=Math.random() * range + cookiesofTokyo.min;
             return Math.ceil(randomCount);
         },
            
                hourSales : function(){
                for (let i=0;i<hours.length;i++){
                   
                 let cookiesNum= Math.ceil(cookiesofTokyo.randomCustomer() *cookiesofTokyo.avgCookiesale);
                cookiesofTokyo.randomHour.push(cookiesNum);
                cookiesofTokyo.dailySales += cookiesNum ;
                }
                },
        
                render: function(){
                 let theParent = document.getElementById('content-area');
                 let h2 =document.createElement('h2');
                 theParent.appendChild(h2);
                 h2.textContent='Tokyo';
                 theParent.appendChild(h2);
                 let list = document.createElement('ul');
                 theParent.appendChild(list);
                 for (let i=0;i<hours.length;i++){
                     let listItem=document.createElement('li');
                     listItem.textContent=hours[i]+':'+cookiesofTokyo.randomHour[i]+' cookies';
                     list.appendChild(listItem);
                 }
        
                 let listItem = document.createElement('li');
                 listItem.textContent='Total : ' + cookiesofTokyo.dailySales+' cookies';
                 list.appendChild(listItem);
            
                },
                }
        
                cookiesofTokyo.hourSales();
                 cookiesofTokyo.render();
                
 let cookiesofDubai = {
 location : 'Dubai',
 min : 11 ,
  max : 38 ,
 avgCookiesale : 3.7 ,
 randomHour : [],
 dailySales : 0 ,
                
randomCustomer : function (){
let range =cookiesofDubai.max-cookiesofDubai.min;
let  randomCount=Math.random() * range + cookiesofDubai.min;
  return Math.ceil(randomCount);
  },
                    
  hourSales : function(){
    for (let i=0;i<hours.length;i++){
                           
        let cookiesNum= Math.ceil(cookiesofDubai.randomCustomer() *cookiesofDubai.avgCookiesale);
       cookiesofDubai.randomHour.push(cookiesNum);
       cookiesofDubai.dailySales += cookiesNum ;
       }
       },

       render: function(){
        let theParent = document.getElementById('content-area');
        let h2 =document.createElement('h2');
        theParent.appendChild(h2);
        h2.textContent='Dubai';
        theParent.appendChild(h2);
        let list = document.createElement('ul');
        theParent.appendChild(list);
        for (let i=0;i<hours.length;i++){
            let listItem=document.createElement('li');
            listItem.textContent=hours[i]+':'+cookiesofDubai.randomHour[i]+' cookies';
            list.appendChild(listItem);
        }

        let listItem = document.createElement('li');
        listItem.textContent='Total : ' + cookiesofDubai.dailySales+' cookies';
        list.appendChild(listItem);
   
       },
       }

       cookiesofDubai.hourSales();
        cookiesofDubai.render();


        let cookiesofParis = {
            location : 'Paris',
            min : 20 ,
             max : 38 ,
            avgCookiesale : 2.3 ,
            randomHour : [],
            dailySales : 0 ,
                           
           randomCustomer : function (){
           let range =cookiesofParis.max-cookiesofParis.min;
           let  randomCount=Math.random() * range + cookiesofParis.min;
             return Math.ceil(randomCount);
             },
                               
             hourSales : function(){
               for (let i=0;i<hours.length;i++){
                                      
                   let cookiesNum= Math.ceil(cookiesofParis.randomCustomer() *cookiesofParis.avgCookiesale);
                  cookiesofParis.randomHour.push(cookiesNum);
                  cookiesofParis.dailySales += cookiesNum ;
                  }
                  },
           
                  render: function(){
                   let theParent = document.getElementById('content-area');
                   let h2 =document.createElement('h2');
                   theParent.appendChild(h2);
                   h2.textContent='Paris';
                   theParent.appendChild(h2);
                   let list = document.createElement('ul');
                   theParent.appendChild(list);
                   for (let i=0;i<hours.length;i++){
                       let listItem=document.createElement('li');
                       listItem.textContent=hours[i]+':'+cookiesofParis.randomHour[i]+' cookies';
                       list.appendChild(listItem);
                   }
           
                   let listItem = document.createElement('li');
                   listItem.textContent='Total : ' + cookiesofParis.dailySales+' cookies';
                   list.appendChild(listItem);
              
                  },
                  }
           
                  cookiesofParis.hourSales();
                   cookiesofParis.render();

                   let cookiesofLima = {
                    location : 'Lima',
                    min : 2 ,
                     max : 16,
                    avgCookiesale : 4.6 ,
                    randomHour : [],
                    dailySales : 0 ,
                                   
                   randomCustomer : function (){
                   let range =cookiesofLima.max-cookiesofLima.min;
                   let  randomCount=Math.random() * range + cookiesofLima.min;
                     return Math.ceil(randomCount);
                     },
                                       
                     hourSales : function(){
                       for (let i=0;i<hours.length;i++){
                                              
                           let cookiesNum= Math.ceil(cookiesofLima.randomCustomer() *cookiesofLima.avgCookiesale);
                          cookiesofLima.randomHour.push(cookiesNum);
                          cookiesofLima.dailySales += cookiesNum ;
                          }
                          },
                   
                          render: function(){
                           let theParent = document.getElementById('content-area');
                           let h2 =document.createElement('h2');
                           theParent.appendChild(h2);
                           h2.textContent='Lima';
                           theParent.appendChild(h2);
                           let list = document.createElement('ul');
                           theParent.appendChild(list);
                           for (let i=0;i<hours.length;i++){
                               let listItem=document.createElement('li');
                               listItem.textContent=hours[i]+':'+cookiesofLima.randomHour[i]+' cookies';
                               list.appendChild(listItem);
                           }
                   
                           let listItem = document.createElement('li');
                           listItem.textContent='Total : ' + cookiesofLima.dailySales+' cookies';
                           list.appendChild(listItem);
                      
                          },
                          }
                   
                          cookiesofLima.hourSales();
                           cookiesofLima.render();  


                        
         
         
         

            

   
   
   

    