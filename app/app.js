angular.module('flickrApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'flickrModule']);

angular.module('flickrApp').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/flickr');

});

angular.module('flickrApp').value('clientId', 'a34fbc08e0da65245dbc6c954214eda4');

angular.module('flickrApp').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
