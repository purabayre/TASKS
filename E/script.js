// Get number input
function getNumber(message) {
  const value = Number(prompt(message));
  if (isNaN(value) || value <= 0) {
    alert('Please enter a valid number');
    throw new Error('Invalid number input');
  }
  return value;
}

// Get text input
function getText(message) {
  const value = prompt(message);
  if (!value || value.trim() === '') {
    alert('Please enter a valid name');
    throw new Error('Invalid text input');
  }
  return value.trim();
}

const numberOfFriends = getNumber('Enter number of friends:');
const totalExpense = getNumber('Enter total expense amount:');

// Calculate equal share
const equalShare = totalExpense / numberOfFriends;

// empty array for storing friends
const friends = [];

//  loop for individual contributions
for (let i = 0; i < numberOfFriends; i++) {
  const name = getText(`Enter name of friend ${i + 1}:`);
  const contribution = getNumber(`Enter amount contributed by ${name}:`);

  friends.push({
    name,
    contribution,
    difference: contribution - equalShare,
  });
}

console.log('================ EXPENSE SUMMARY ================');
console.log(`Total Expense       : ₹${totalExpense.toFixed(2)}`);
console.log(`Number of Friends   : ${numberOfFriends}`);
console.log(`Equal Share / Person: ₹${equalShare.toFixed(2)}`);
console.log('-------------------------------------------------');

friends.forEach((friend) => {
  console.log(`Friend Name : ${friend.name}`);
  console.log(`Contributed : ₹${friend.contribution.toFixed(2)}`);

  if (friend.difference > 0) {
    console.log(`Status      : Receives ₹${friend.difference.toFixed(2)}`);
  } else if (friend.difference < 0) {
    console.log(
      `Status      : Pays ₹${Math.abs(friend.difference).toFixed(2)}`,
    );
  } else {
    console.log('Status      : No settlement required');
  }

  console.log('-------------------------------------------------');
});

console.log('============= END OF SUMMARY =============');
