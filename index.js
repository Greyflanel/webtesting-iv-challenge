const server = require('./server.js');
// endpoints here

const port = process.env.PORT || 4000;
server.listen(port, () => 
console.log(`Listening on Port ${port}`));
