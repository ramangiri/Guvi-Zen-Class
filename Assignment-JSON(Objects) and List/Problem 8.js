var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ];
   function chksecurityQuestions(securityQuestions,question,expectedAnswer) {
     let check = 0;
     for (let i=0;i<securityQuestions.length;i++){
       if (securityQuestions[i].question == question && securityQuestions[i].expectedAnswer == expectedAnswer){
         check = 1;
         break;}
     }
     if (check == 1)
       return true;
     else
       return false;
   }
   
   var ques = "What was your first pet’s name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); 
   
   var ques = "What was your first pet’s name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); 