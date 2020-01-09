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

Favorites.statics.findByEpisodeId = function findByEpisodeId (param, callbacks) {
  return this.model('Favorites').find({ episode_id: param }, callbacks);
};

module.exports = mongoose.model('Favorites', Favorites);