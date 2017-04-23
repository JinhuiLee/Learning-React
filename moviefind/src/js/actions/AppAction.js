var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants.js');

var AppAction = {
    searchMovie: function (movie) {
        console.log('Searching for movie' + movie.title);
        AppDispatcher.handleViewAction({actionType: AppConstants.SEARCH_MOVIES, movie: movie});
    },
    receiveMovieResults: function (movie) {
        console.log(movie);
        AppDispatcher.handleViewAction({actionType: AppConstants.RECEIVE_MOVIES, movie: movie})
    }
}

module.exports = AppAction;
