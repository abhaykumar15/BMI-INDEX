const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-result")
const weightconditionEl = document.getElementById("weight-condition")
function calculateBMI() {
    const heightvalue = document.getElementById("height").value /100
    const weightvalue = document.getElementById("weight").value
    //console.log(heightvalue, weightvalue);
    const bmivalue = weightvalue/(heightvalue * heightvalue)
    //console.log(bmivalue);
    bmiInputEl.value = bmivalue;

    if (bmivalue < 18.5) {
        weightconditionEl.innerText = "Under Weight"
    }
    else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
        weightconditionEl.innerText = "Normal Weight"
    }
    else if (bmivalue >= 25 && bmivalue <= 29.9) {
        weightconditionEl.innerText = " OverWeight"
    }
    else if (bmivalue >= 30)
    {
        weightconditionEl.innerText = "Obesity"
    }
}

btnEl.addEventListener("click",calculateBMI)