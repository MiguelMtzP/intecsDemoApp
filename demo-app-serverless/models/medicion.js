const mongoose = require('mongoose');
const MedicionSchema = new mongoose.Schema({  
  sensor: {
      type: String
  },
  idEstacion:{
    type: mongoose.Schema.ObjectId,
    red:"Estacion"
  },
  fecha:{
    type: Date,
      trim: true,
      default: Date.now
  }
});
module.exports = mongoose.model('Medicion', MedicionSchema);