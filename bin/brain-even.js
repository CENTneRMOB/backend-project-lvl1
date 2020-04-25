#!/usr/bin/env node

import { userName, askNumber } from '../src/index.js';

console.log(`Hello,${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

askNumber();
