const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A student must have a name"],
  },
  sid: {
    type: String,
    required: [true, "A student must have a sid"],
  },
  email: {
    type: String,
    required: [true, "A student must have a email"],
  },
  phone: {
    type: String,
    required: [true, "A student must have a phone"],
  },
  image: {
    type: String,
    required: [true, "Must contain a fingerprint image"],
  },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
