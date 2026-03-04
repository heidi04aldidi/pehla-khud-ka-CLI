#!/usr/bin/env node
// const {Command} = require('commander'); // Import the Command class from the commander package

// const program = new Command(); // Create a new Command instance

// program
// .command('greet <name>') // Define a command 'greet' that takes a required argument 'name'
// .action((name: string)=> { console.log(`Hello, ${name}!`); }); // Define the action to be performed when the command is executed

// program
// .command('add <num1> <num2>') // Define a command 'add' that takes two required arguments 'num1' and 'num2'
// .action((num1: string, num2: string) => {
//     const sum = Number(num1) + Number(num2);
//     console.log(sum);
// });

// program
// .command('subtract <num1> <num2>') // Define a command 'subtract' that takes two required arguments 'num1' and 'num2'
// .action((num1: string, num2: string) => {
//     const difference = Number(num1) - Number(num2);
//     console.log(difference);
// });

// program
// .command('multiply <num1> <num2>') // Define a command 'multiply' that takes two required arguments 'num1' and 'num2'
// .action((num1: string, num2: string) => {
//     const product = Number(num1) * Number(num2);
//     console.log(product);
// });

// program
// .command('divide <num1> <num2>') // Define a command 'divide' that takes two required arguments 'num1' and 'num2'
// .action((num1: string, num2: string) => {
//     if (Number(num2) === 0) {
//         console.log('Error: Division by zero is not allowed.');
//     } else {
//         const quotient = Number(num1) / Number(num2);
//         console.log(quotient);
//     }
// });

// program.parse(process.argv); // Parse the command-line arguments



import { Command } from "commander";
import chalk from "chalk";
import { MathCommand } from "./commands/MathCommand";

const program = new Command();
const math = new MathCommand();

program
  .name("devtool")
  .description("DevToolkit CLI - Productivity Tool")
  .version("1.0.0");

program
  .command("add <num1> <num2>")
  .description("Add two numbers")
  .action((num1: string, num2: string) => {
    const result = math.add(Number(num1), Number(num2));
    console.log(chalk.green(`Result: ${result}`));
  });

program
  .command("subtract <num1> <num2>")
  .description("Subtract two numbers")
  .action((num1: string, num2: string) => {
    const result = math.subtract(Number(num1), Number(num2));
    console.log(chalk.green(`Result: ${result}`));
  });

program
  .command("multiply <num1> <num2>")
  .description("Multiply two numbers")
  .action((num1: string, num2: string) => {
    const result = math.multiply(Number(num1), Number(num2));
    console.log(chalk.green(`Result: ${result}`));
  });

program
  .command("divide <num1> <num2>")
  .description("Divide two numbers")
  .action((num1: string, num2: string) => {
    try {
      const result = math.divide(Number(num1), Number(num2));
      console.log(chalk.green(`Result: ${result}`));
    } catch (error: any) {
      console.log(chalk.red(error.message));
    }
  });

program.parse(process.argv);