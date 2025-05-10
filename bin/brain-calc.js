#!/usr/bin/env node
import { runGameEngine } from '../src/index.js';
import { gameRules, generateRound } from '../src/games/calc.js';

runGameEngine(gameRules, generateRound);
