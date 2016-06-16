const app = require('express')();

console.log("Server loaded");

app.get('/', (req, res) => {
  res.send("Hello world.");
});

const port = port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);
console.log(`Server running on http://${ip}:${port}`);
