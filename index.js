const cheerio = require('cheerio');
const fs = require('fs');


const $ = cheerio.load(fs.readFileSync('pagina.html'));

console.log($('h2').text());