const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => console.log(`running in port: ${port}`));