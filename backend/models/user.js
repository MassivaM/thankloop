const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  createdProfiles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  peopleThanked: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
