const empId = prompt('Enter your Employee ID');
const empName = prompt('Enter Employee Name');
const designation = prompt('Enter your Designation');
const department = prompt('Enter your Department');
const month = prompt('Enter salary month');
const year = new Date().getFullYear();
const totalWorkingDays = Number(prompt('Enter total working days'));
const workingDays = Number(prompt('Enter working days'));

const salary = Number(prompt('Enter basic salary of Employee'));

// leave = total working days - working days
const leaves = totalWorkingDays - workingDays;

// salary per day = basic salary / total working days
const salaryPerDay = salary / totalWorkingDays;

// payable salary = salary per day * working days
const payableSalary = salaryPerDay * workingDays;

// OUTPUT
console.log('===========================================');
console.log('              SALARY SLIP                  ');
console.log('===========================================');
console.log('            EMPLOYEE DETAILS               ');
console.log('-------------------------------------------');
console.log(`Employee ID      : ${empId}`);
console.log(`Employee Name    : ${empName}`);
console.log(`Designation      : ${designation}`);
console.log(`Department       : ${department}`);
console.log(`Salary Month/Year: ${month}-${year}`);
console.log('-------------------------------------------');
console.log('            ATTENDANCE DETAILS             ');
console.log('-------------------------------------------');
console.log(`Total working days : ${totalWorkingDays}`);
console.log(`Working days       : ${workingDays}`);
console.log(`Leave days         : ${leaves}`);
console.log('-------------------------------------------');
console.log('              SALARY DETAILS               ');
console.log('-------------------------------------------');
console.log(`Basic salary     : ${salary}`);
console.log(`Per Day Salary   : ${salaryPerDay.toFixed(2)}`);
console.log(`Payable salary   : ${payableSalary.toFixed(2)}`);
console.log('===========================================');
