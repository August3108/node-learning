// chalk is to give editing for text 
// npmjs.com/package/chalk

import chalk from 'chalk';

console.log(chalk.blue.underline('Hello world!'));

// if i use inverse the color goes for bg 
console.log(chalk.blue.underline.inverse('Hello world!'));