var cat = {
  name: 'Fluffy',
  activities: ['play', 'eat cat food'],
  catFriends: [
  {
  name: 'bar',
  activities: ['be grumpy', 'eat bread omblet'],
  weight: 8,
  furcolor: 'white'
  }, 
  {
  name: 'foo',
  activities: ['sleep', 'pre-sleep naps'],
  weight: 3
  }
  ]
 }
 
 cat["height"] = 10;      //1.0 Changing height
 cat["weight"] = 9;       //1.1 Changing weight 
 cat["name"] = "Fluffyy"  //2   Changing name
 
 let activities = [];
 let finalActivities = [];
 let friends = [];
 let totalweight = 0;
 for (let i in cat["catFriends"]){
   activities = activities.concat(cat["catFriends"][i].activities)       //extract activities of friends
   friends.push(cat["catFriends"][i].name);                              //extract names of catfriends
   totalweight += cat["catFriends"][i].weight;                           //extract totalweight
 }

 for (let i=0;i<activities.length;i++){
   let ct = 0; 
   for (let j=0;j<finalActivities.length;j++)
     if (activities[i] == finalActivities[j])
       ct = 1;
   if (ct == 0)
     finalActivities.push(activities[i]);                                 // remove duplicates if any
 }
 console.log(finalActivities.join(", "));                                 //3 print the activities
 console.log(friends.join(", "));                                         //4 print the catFriends names
 console.log(totalweight);                                                //5 print the totalweight
 
 finalActivities = finalActivities.concat(cat["activities"]);
 console.log(finalActivities.join(", "));                                 //6 print total activities
 
 for (let i in cat["catFriends"]){
   if (cat["catFriends"][i].name== "bar")                                 //7 if condition, incase other cats are present
     cat["catFriends"][i]["activities"] = cat["catFriends"][i]["activities"].concat(['play','walk'])      
   if (cat["catFriends"][i].name == "foo")
     cat["catFriends"][i]["activities"] = cat["catFriends"][i]["activities"].concat(['eat cat food','walk'])
   }
 
 for (let i in cat["catFriends"])
   if (cat["catFriends"][i].name== "bar")
     cat["catFriends"][i].furcolor = "black"                              //8 Update the fur colour of bar
 
 console.log(cat)
 
 
 