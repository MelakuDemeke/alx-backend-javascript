const express = require('express');
const fs = require('fs')

const app = express()
const PORT = 1245
const DB_FILE = process.argv[2] || '';
