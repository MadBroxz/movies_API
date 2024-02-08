const Actors = require("./Actors");
const Directors = require("./Directors");
const Genres = require("./Genres");
const Movies = require("./Movies");

Genres.belongsToMany(Movies,{through: 'moviesGenres'})
Movies.belongsToMany(Genres,{through: 'moviesGenres'})


Directors.belongsToMany(Movies,{through: 'moviesDirectors'})
Movies.belongsToMany(Directors,{through: 'moviesDirectors'})


Actors.belongsToMany(Movies,{through: 'moviesActors'})
Movies.belongsToMany(Actors,{through: 'moviesActors'})




