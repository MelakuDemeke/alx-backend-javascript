const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';