angular.module('flickrModule', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('flickrModule').config(function ($stateProvider) {

  $stateProvider.state('flickr', {
    url: '/flickr',
    templateUrl: 'app/framework/components/flickr/view/flickr-view.html',
    controller: 'flickrController',
    controllerAs: 'flickrCtrl'
  });
  /* Add New States Above */

});
