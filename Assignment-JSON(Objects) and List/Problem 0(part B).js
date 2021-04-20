var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   };
   
   let dates = [];
   for (let i in myCar["accidents"]){
     myCar["accidents"][i].atFaultForAccident = false;     //1. change atFaultForAccident to false
     dates.push( myCar["accidents"][i].date);              //2. Extract date of accidents
   }
   
   console.log(dates.join(", "));                          //2. print date of accidents  
   
   console.log(myCar);