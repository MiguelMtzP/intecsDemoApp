const mongoose = require('mongoose');
const EstacionSchema = new mongoose.Schema({  
  nombre: {
      type: String
  },
  distancia: {
      type: String,
      trim: true
  },
  url:String
});
module.exports = mongoose.model('Estacion', EstacionSchema);