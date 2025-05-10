#!/usr/bin/env node

// Если используете именованный экспорт (Вариант 1):
import { greetUser } from '../src/cli.js';

// Если используете default экспорт (Вариант 2):
// import greetUser from '../src/cli.js';

greetUser();
