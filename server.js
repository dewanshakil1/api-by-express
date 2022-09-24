const express = require('express');
const color = require('colors');
const dotenv = require('dotenv').config();
//  environment variable
const port = process.env.PORT || 8080;
// express init
const app = express();
// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// listen
app.listen(port, () => {
	console.log(`server is running on ${port}`.bgBlue.black);
});
