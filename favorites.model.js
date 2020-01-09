const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Favorites = new Schema({
    episode_id: {
        type: String
    },
    is_favorite: {
        type: Boolean
    }
});

module.exports = mongoose.model('Favorites', Favorites);