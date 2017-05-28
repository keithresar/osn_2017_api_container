
const express = require('express');
const app = express();

hit_count = 0;

app.get('/', function (req, res) {
  hit_count += 1;
  status = { 'api': 'ok', 'api_hit_count': hit_count,'api_hostname': process.env.HOSTNAME };

  res.send(JSON.stringify(status, null, 3));
})

app.listen(8080, function () {
  console.log('Listening on port 8080!');
})



