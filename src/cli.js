import readlineSync from 'readline-sync';

export default function sayHello() {
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}`);
}
