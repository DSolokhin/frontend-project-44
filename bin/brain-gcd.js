#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import { runGameEngine } from '../src/index.js';
import { gameRules, generateRound } from '../src/games/gcd.js';

const userName = greetUser();
runGameEngine(gameRules, generateRound, userName);