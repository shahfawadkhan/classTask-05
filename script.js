let yourAge = document.getElementById("myage");
let calculateBtn = document.getElementById("calculate");

let todayDate = new Date();
let currentYear = todayDate.getFullYear();
let currentMonth = todayDate.getMonth() + 1; 
let currentDay = todayDate.getDate();


calculateBtn.addEventListener('click', function() {
    let birthYear = parseInt(yourAge.value);
    let birthMonth = 0; 
    let birthDay = 0;   
    let age = currentYear - birthYear;
    console.log(age);


})
    
   
