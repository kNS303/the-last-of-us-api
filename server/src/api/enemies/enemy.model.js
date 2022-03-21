const mongoose = require('mongoose');

const enemySchema = new mongoose.Schema(

    {
        name: { type: String, required: true, trim: true },
        specie: { type: String, required: true, trim: true },
        img: { type: String, required: true, trim: true },
        rank: { type: Number, required: false, trim: true },

    },

    {
        timestamps: true
    }
);

const Enemy = mongoose.model('enemies', enemySchema);

module.exports = Enemy;