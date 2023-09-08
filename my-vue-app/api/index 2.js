const server = require('../api/server/app');
require('dotenv').config();
const database = require('../api/db/db');
const PORT = process.env.PORT;

database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Database connected!');
});

server.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}`);
});