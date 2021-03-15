const express = require("express");
const app = express();
const path = require('path');


const PORT = 80;


if(true) {
    app.use('/', express.static(path.join(__dirname, '../client', 'public')));
    app.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname, '../client', 'public', 'index.html'))
    })
}


async function start() {
    try{
	app.listen(PORT, () => console.log(`Starting the development server... ${PORT}`)); 
    } catch(e) {
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start();