const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema(

    {
        name: { type: String, required: true, trim: true },
        age: { type: Number, required: false, trim: true },
        img: { type: String, required: false, trim: true },
        bio: { type: String, required: true, trim: true },

    },

    {
        timestamps: true
    }
);

const Character = mongoose.model('characters', characterSchema);

module.exports = Character;