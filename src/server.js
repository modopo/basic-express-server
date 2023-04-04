'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    })
  }
}