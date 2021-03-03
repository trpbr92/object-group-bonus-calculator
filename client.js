console.log('in js');

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function bonusCalculator(name, employeeNumber, annualSalary, reviewRating){
  console.log(name);
 
  let bonusPercentage = 0;
 

  if (reviewRating <= 2) {
  console.log('reviewRating to No Bonus');
  bonusPercentage = 0 * annualSalary;
}//end if

 else if (reviewRating === 3) {
  console.log('reviewRating to bonus 4% of income');
  bonusPercentage = .04 * annualSalary;
}//end else if

else if (reviewRating === 4) {
  console.log('reviewRating to bonus 6% of income');
 bonusPercentage = .06 * annualSalary;
}//end else if

else if (reviewRating === 5) {
  console.log('reviewRating to bonus 10% of income');
  bonusPercentage = .1 * annualSalary;
  }//end else if
  return bonusPercentage;
}//end bonus Calculator


console.log(bonusCalculator('Mayella', '89068', '35000', 1 ));
console.log(bonusCalculator('Jem', '62347', '63500', 4 ));
console.log(bonusCalculator('Scout', '6243', '74750', 5 ));
console.log(bonusCalculator('Robert', '26835', '66000', 1 ));
console.log(bonusCalculator('Atticus', '2475', '47000', 3 ));