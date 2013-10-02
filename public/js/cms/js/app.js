'use strict';

var jaztecCms = angular.module('jaztecCms', [
    'jaztecCmsPageService',
    'ngSanitize'
]).config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/:route', {templateUrl: '/partials/cleared', controller: 'PageCtrl'}).
        otherwise({redirectTo: '/home'});
}]).config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);
