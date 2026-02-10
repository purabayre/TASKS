// Get valid text input
function getText(message) {
  const value = prompt(message);

  // If user cancels or enter empty value
  if (value === null || value.trim() === '') {
    alert('Text value is required.');
    throw new Error('Invalid text input');
  }

  return value.trim();
}

// Get valid number input
function getNumber(message, allowZero) {
  const value = prompt(message);
  const number = Number(value);

  // Check if input is a number
  if (isNaN(number)) {
    alert('Please enter a numeric value.');
    throw new Error('Invalid number');
  }

  // Check for negative numbers
  if (number < 0) {
    alert('Number cannot be negative.');
    throw new Error('Negative number');
  }

  // Check for zero if not allowed
  if (allowZero === false && number === 0) {
    alert('Zero is not allowed.');
    throw new Error('Zero not allowed');
  }

  return number;
}

// Get total days in a month
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// Convert month number to month name
function monthName(month) {
  const names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return names[month - 1];
}

try {
  // EMPLOYEE
  const empId = getText('Enter Employee ID');
  const empName = getText('Enter Employee Name');
  const designation = getText('Enter Designation');
  const department = getText('Enter Department');

  // MONTH
  const monthNumber = getNumber('Enter salary month (1-12)', false);

  if (monthNumber < 1 || monthNumber > 12) {
    alert('Month number must be between 1 and 12.');
    throw new Error('Invalid month');
  }

  const currentYear = new Date().getFullYear();
  const monthText = monthName(monthNumber);
  const totalDaysInMonth = daysInMonth(monthNumber, currentYear);

  // ATTENDANCE
  const totalWorkingDays = getNumber(
    `Enter total working days (Max ${totalDaysInMonth})`,
    false,
  );

  if (totalWorkingDays > totalDaysInMonth) {
    alert('Total working days cannot exceed days in the month.');
    throw new Error('Invalid total working days');
  }

  const workingDays = getNumber('Enter working days', true);

  if (workingDays > totalWorkingDays) {
    alert('Working days cannot be more than total working days.');
    throw new Error('Invalid working days');
  }

  // SALARY
  const basicSalary = getNumber('Enter basic salary', true);

  // CALCULATIONS
  const leaveDays = totalWorkingDays - workingDays;
  const salaryPerDay = basicSalary / totalWorkingDays;
  const payableSalary = salaryPerDay * workingDays;

  // OUTPUT
  console.log('===========================================');
  console.log('              SALARY SLIP                  ');
  console.log('===========================================');
  console.log('            EMPLOYEE DETAILS               ');
  console.log('-------------------------------------------');
  console.log(`Employee ID        : ${empId}`);
  console.log(`Employee Name      : ${empName}`);
  console.log(`Designation        : ${designation}`);
  console.log(`Department         : ${department}`);
  console.log(`Month / Year       : ${monthText} - ${currentYear}`);
  console.log(`Days in Month      : ${totalDaysInMonth}`);
  console.log('-------------------------------------------');
  console.log('            ATTENDANCE DETAILS             ');
  console.log('-------------------------------------------');
  console.log(`Total Working Days : ${totalWorkingDays}`);
  console.log(`Working Days       : ${workingDays}`);
  console.log(`Leave Days         : ${leaveDays}`);
  console.log('-------------------------------------------');
  console.log('              SALARY DETAILS               ');
  console.log('-------------------------------------------');
  console.log(`Basic Salary       : ${basicSalary.toFixed(2)}`);
  console.log(`Salary Per Day     : ${salaryPerDay.toFixed(2)}`);
  console.log(`Payable Salary     : ${payableSalary.toFixed(2)}`);
  console.log('===========================================');
} catch (error) {
  console.error('Program stopped due to invalid input.');
}
