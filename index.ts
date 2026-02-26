#!/usr/bin/env node
const {Command} = require('commander');

const program = new Command(); // Create a new Command instance

program
.command('greet <name>') // Define a command 'greet' that takes a required argument 'name'
.action((name)=> { console.log(`Hello, ${name}!`); }); // Define the action to be performed when the command is executed

program.parse(process.argv); // Parse the command-line arguments