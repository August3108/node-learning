import validator from 'validator';
import chalk from 'chalk';
//https://www.npmjs.com/package/validator
//checks if email is right or not 
const res = validator.isEmail("baka@gmail.com");
console.log(res);

// now to make it look into color we simply write
console.log(res? chalk.green.underline.inverse(res) :chalk.false.underline.inverse(res));