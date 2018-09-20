var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  date_of_birth: String,
  telephone: String,
  email_address: String,
});

module.exports = mongoose.model('Patients', PatientSchema);