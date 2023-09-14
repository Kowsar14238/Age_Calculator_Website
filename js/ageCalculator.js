
let userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0];//This condition will not allow the user to select a future date. 

let result = document.getElementById("result");  

function calculateAge(){

    let birthDate = new Date(userInput.value);
    let presentDate = new Date();
    let resultDay, resultMonth, resultYear;
    

    let birthday = birthDate.getDate();
    let birthmonth = birthDate.getMonth() + 1;//We add '1' with month otherwise the month will start from 0.    
    let birthyear = birthDate.getFullYear();


    let currentday = presentDate.getDate();
    let currentmonth = presentDate.getMonth() + 1;//We add '1' with month otherwise the month will start from 0.
    let currentyear = presentDate.getFullYear();

    resultYear = currentyear - birthyear;

    if(currentmonth >= birthmonth){
        resultMonth = currentmonth - birthmonth;
    }
    else{
        resultYear--;
        resultMonth = 12 + (currentmonth - birthmonth);
    }

    if(currentday >= birthday){
        resultDay = currentday - birthday;
    }
    else{
        resultMonth--;
        resultDay = getDaysInMonth(birthyear, birthmonth) + currentday - birthday;
    }

    //If the result of month will be less than 0 then this condition will execute
    if(resultMonth < 0){
        resultMonth = 11;
        resultYear--;
    }

    //It will show the result in the web page
    result.innerHTML = `Currently your age is <br> <span>${resultYear} years, ${resultMonth} months, and ${resultDay} days </span>`;

    console.log(resultMonth, resultYear, resultDay);
}

//It will return the last date of that month
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}