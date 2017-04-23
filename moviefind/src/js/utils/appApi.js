var AppActions = require('../actions/AppAction')

module.exports = {
    searchMovies : function(movie){
       console.log('appApi');
       $.ajax({
           url: 'http://www.omdbapi.com/?s='+movie.title,
           dataType: 'json',
           cache: 'false',
           success: function(data){
                AppActions.receiveMovieResults(data.Search);
           }.bind(this),
           error: function(xhr, status, error){
                alert(error);
           }.bind(this)
       }); 
    }
}