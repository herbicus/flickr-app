angular.module('flickrModule').controller('flickrController', ['$scope', 'flickrService', function ($scope, flickrService) {

  var ctrl = this;

  ctrl.getInteresting = function () {

    flickrService.getInteresting().then(function (results) {
        ctrl.flickrData = results.photos;
      }, function (error) {
        console.log('controller error in getting images from flickr');
      });

  };

  ctrl.getInteresting();

  ctrl.getPhotoId = function (myPhotoId) {
    console.log(myPhotoId);
    flickrService.getPhotoId(myPhotoId).then(function (results) {
      ctrl.photoData = results.photos;
      ctrl.imageSRc = 'farm' + ctrl.photoData.farm + '.static.flickr.com/' + ctrl.photoData.server + '/' + ctrl.photoData.id + '_' + ctrl.photoData.secret + '_m.jpg';

    }, function (error) {
      console.log('controller error in getting images from flickr');
    });

  };

  ctrl.getPhotoId();
 //ctrl.getPhotoId(16535411828);

  ctrl.getSearch = function () {

    flickrService.getSearch().then(function (results) {
      ctrl.searchData = results.photos;
    }, function (error) {
      console.log('controller error in getting images from flickr');
    });

  };

  ctrl.getSearch();

  $scope.$watch('flickrCtrl.searchInput', function(newVal, oldVal){
    if(newVal != oldVal) {
      console.log('yo ', newVal);
      ctrl.getSearch(newVal);
    }

  });

}]);
