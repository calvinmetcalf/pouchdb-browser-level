var sampleJSON = require('./package.sample.json');
var fs = require('fs');
var version = process.env.VERSION;
sampleJSON.version = version + '-alpha';
fs.writeFile('./package.json', JSON.stringify(sampleJSON, false, 4), function (err) {
  if (err) {
    process.exit(1);
  }
});