const fs = require('fs'); // file system module

const spongeboy = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongeboy);
  response.end();
};

module.exports.getImage = getImage;
