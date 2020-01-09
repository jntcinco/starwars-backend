const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const favoriteRoutes = express.Router();
const PORT = 4000;

let Favorites = require('./favorites.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/starwars', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

favoriteRoutes.route('/').get(function(req, res) {
    Favorites.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

favoriteRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Favorites.findById(id, function(err, favorite) {
        res.json(favorite);
    });
});

favoriteRoutes.route('/get_by/:episode_id').get(function(req, res) {
    let episode_id = req.params.episode_id;
    console.debug("test: "+req.params.episode_id);
    Favorites.findByEpisodeId(episode_id, function(err, favorite) {
        console.debug("favorite: "+JSON.stringify(favorite));
        res.json(favorite);
    });
});

favoriteRoutes.route('/update/:id').post(function(req, res) {
    Favorites.findById(req.params.id, function(err, favorite) {
        if (!favorite)
            res.status(404).send("data is not found");
        else
            favorite.episode_id = req.body.episode_id;
            favorite.is_favorite = req.body.is_favorite;

            favorite.save().then(favorite => {
                res.json('Favorite updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

favoriteRoutes.route('/add').post(function(req, res) {
	console.debug("req: "+req);
    let favorite = new Favorites(req.body);
    favorite.save()
        .then(favorite => {
            res.status(200).json({'message': 'favorite added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new favorite failed');
        });
});

app.use('/favorites', favoriteRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});