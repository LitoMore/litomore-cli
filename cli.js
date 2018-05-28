#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalkPipe = require('chalk-pipe');

meow(`
	Usage
		$ litomore
`);

console.log(chalkPipe('cyan.underline')('https://github.com/LitoMore'));
