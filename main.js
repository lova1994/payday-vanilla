// var hourSalary;
// Var pass1 = 5.25;

// function raknaUt(hourSalary, pass1) {
// return hourSalary * pass1;

// }

const k1 = 5.15;
const k2 = 6;


function payDay(hRate, shift) {
    let holidayPay = hRate * shift * 0.12;
    let ob = 50 * shift;
    return hRate * shift + holidayPay + ob;
}

console.log(payDay(150, 5.25))


// let hRate = 145;
// let holidayPay = hourSalary * 0.12


