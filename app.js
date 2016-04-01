/**
 * Created by jj on 3/31/16.
 */

const app = require('express')();
const uploadFunc = require('./upload');

app.use(require('morgan')('combined'));                // morgan logs stuff. for debugging.


app.get('/', uploadFunc);


// server setup
const port = process.env.PORT || 3090;
const server = require('http').createServer(app);
server.listen(port);
console.log('Server listening on:', port);