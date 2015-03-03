angular.module('flickrModule').controller('flickrController', ['$scope', 'flickrService', function($scope, flickrService) {

	var ctrl = this;

	ctrl.getData = function(){

	  flickrService.getData()
	    .then(function(results){
	      ctrl.flickrData = results.data;
	    }, function(error){
	      console.log('controller error in getting images from flickr');
	    });

	};

	ctrl.getData();

}]);
