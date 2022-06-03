const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
    toplantikonu: { type: String, require: true, unique: true },
    toplantiiçerik: { type: String, require: true, unique: true },
    katılımcı: { type: String, require: true, unique: true },
    toplantitarih: { type: Date, default: Date.now },
});

module.exports = mongoose.model("meeting", meetingSchema);