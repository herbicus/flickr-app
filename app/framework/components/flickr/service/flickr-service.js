angular.module('flickrModule').service('flickrService', ['$http', '$q', 'clientId', function($http, $q, clientId) {

  // assumes a node server running on port 9000
  // export PORT=9000
  //var SERVICE_URL_PREFIX = 'http://localhost:9000';

  // GET PHOTO ID ( URL )
  this.getPhotoId = function(photo_id) {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'https://api.flickr.com/services/rest',
      params: {
        photo_id: photo_id,
        method: 'flickr.photos.getInfo',
        api_key: 'a34fbc08e0da65245dbc6c954214eda4',
        text: 'sky',
        format: 'json',
        nojsoncallback: 1
      }

    }).success(function (results) {
      var data = results || [];
      deferred.resolve(data);
    }).error(function (error) {
      console.error(error);
      deferred.reject(error);
    });

    return deferred.promise;

  };

  // GET MOST INTERESTING ( POPULAR )
  this.getInteresting = function() {
    var deferred = $q.defer();
    //var url = SERVICE_URL_PREFIX;
    // note: clientId = 'a34fbc08e0da65245dbc6c954214eda4'

    //var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from flickr.photos.search where has_geo='true' and tags='Atlanta' and api_key=' + clientId + '&format=json&callback=yqlCallback';
    //var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.interestingness(20)%20where%20api_key%3D%2292bd0de55a63046155c09f1a06876875%22%3B&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    //var url = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=b04e82ca757738af4affd44e499555e5&per_page=50&page=1&format=json&auth_token=72157651140623792-834b904f10b5f27e&api_sig=77808f5b26db79180f23537b6aff688e';

    var url = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=a34fbc08e0da65245dbc6c954214eda4&per_page=50&page=1&format=json&auth_token=72157651140623792-834b904f10b5f27e&api_sig=77808f5b26db79180f23537b6aff688e';

    $http({
      method: 'GET',
      url: 'https://api.flickr.com/services/rest',
      params: {
        method: 'flickr.interestingness.getList',
        api_key: 'a34fbc08e0da65245dbc6c954214eda4',
        text: 'sky',
        format: 'json',
        nojsoncallback: 1
      }

    }).success(function (results) {
      var data = results || [];
      deferred.resolve(data);
    }).error(function (error) {
      console.error(error);
      deferred.reject(error);
    });

    return deferred.promise;

  };

}]);
