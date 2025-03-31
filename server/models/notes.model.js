const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  notesimage: {
    type: String,
    default:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7d/d1/9e/7dd19ecc-fef9-bc7e-0a1d-10796501161e/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/1200x600wa.png",
  },
  userid: {
    type: String,
    required: true,
  },
});

const notesModel = mongoose.model("notes", notesSchema);

module.exports = notesModel;
