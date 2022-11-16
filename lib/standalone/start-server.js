#!/usr/bin/env node
const dotenv = require('dotenv');
dotenv.config();

const companion = require('../companion');

// @ts-ignore
const { version } = require('../../package.json');
const { app } = require('.');
const port = process.env.PORT || 3020;

companion.socket(app.listen(port));

console.log(`Welcome to Companion! v${version}`);
console.log(`Listening on http://localhost:${port}`);
