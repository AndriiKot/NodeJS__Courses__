require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
	res.send('Hello, World!');
})

app.listen(port, console.log(`Web app available at http://localhost:${port}`));

// .env
// PORT=3000