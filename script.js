let yourAge = document.getElementById("yourAge");
let calculateBtn = document.getElementById("calculate");

let todayDate = new Date();
let currentYear = todayDate.getFullYear();
let currentMonth = todayDate.getMonth() + 1; 
let currentDay = todayDate.getDate();

let yearBox = document.getElementById("year");
let monthBox = document.getElementById("months");
let daysBox = document.getElementById("days");

calculateBtn.addEventListener('click', function() {
    
    let birthDate = new Date(yourAge.value);
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1; 
    let birthDay = birthDate.getDate();   
  
    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate(); 
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    yearBox.textContent = ageYears;
    monthBox.textContent = ageMonths;
    daysBox.textContent = ageDays;
});



