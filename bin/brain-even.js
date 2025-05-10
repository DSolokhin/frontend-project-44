#!/usr/bin/env node
import greetUser from '../src/cli.js';
import evenGame from '../src/even.js';

const userName = greetUser();
const isWinner = evenGame();

if (isWinner) {
  console.log(`Congratulations, ${userName}!`);
}
