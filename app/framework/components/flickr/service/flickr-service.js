angular.module('flickrModule').service('flickrService', ['$http', '$q', 'clientId', function($http, $q, clientId) {

  // assumes a node server running on port 9000
  // export PORT=9000
  //var SERVICE_URL_PREFIX = 'http://localhost:9000';

  this.getData = function() {
    var deferred = $q.defer();
    //var url = SERVICE_URL_PREFIX;
    // note: clientId = 'a34fbc08e0da65245dbc6c954214eda4'

    var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from flickr.photos.search where has_geo='true' and tags='New York City' and api_key=' + clientId + '&format=json&callback=yqlCallback';


    $http.json(url)
      .success(function (results) {
        var data = results || [];
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };

}]);
