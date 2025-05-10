#!/usr/bin/env node
import greetUser from '../src/cli.js';
import runEvenGame from '../src/even.js';

const userName = greetUser();
runEvenGame(userName);