console.log('Part 2: Prime Time')

let max = 50;

for (let i = 2; i <= max; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

//array
const names = ['John, May, Smith, Tom, Jim'];
const greetings = [];
for (let i = 0; i < names.length; i ++) {
  greetings[i] = 'Hello, ' + names[i] + '!';
      console.log(greetings[i]);
}
