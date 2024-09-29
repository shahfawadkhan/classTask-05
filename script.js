let yourAge = document.getElementById("myage");
let calculateBtn = document.getElementById("calculate");

let todayDate = new Date();
let currentYear = todayDate.getFullYear();
let currentMonth = todayDate.getMonth() + 1; 
let currentDay = todayDate.getDate();


let yearBox = document.getElementById("year");
let monthBox = document.getElementById("months");
let daysBox = document.getElementById("days");

calculateBtn.addEventListener('click', function() {
    let birthYear = parseInt(yourAge.value);
    let birthMonth = 0; 
    let birthDay = 0;   
    // console.log(age);
        let ageYears = currentYear - birthYear;
        let ageMonths = currentMonth - birthMonth;
        let ageDays = currentDay - birthDay;

    yearBox.textContent = `${ageYears}<br>Years`;
    monthBox.textContent = ageDays;
    daysBox.textContent = ageDays;

    
})


