// server.js
const https = require('https')
const fs = require('fs')

const options = {
    key: fs.readFileSync('./private_key.pem'),
    cert: fs.readFileSync('./public_certificate.pem')
}

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('HTTPS Server - Secure Page');
}).listen(443, () => {
  console.log('Server is running on https://localhost');
});