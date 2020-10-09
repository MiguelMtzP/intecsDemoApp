const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

module.exports = connectToDatabase = () => {
  console.log('======================> using new database connection');
  return mongoose.connect(process.env.DB_URL)
    .then(db => { 
      console.log("se inicializo la nueva conexion ....",db.connections[0]._readyState);
    });
};