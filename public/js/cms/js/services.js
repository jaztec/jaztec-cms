'use strict';

/** Page service */
angular.module('jaztecCmsPageService', ['ngResource']).
      factory('Page', function($resource){
    var Page = $resource('/pages/:url', {}, {
        query: {method: 'GET', params:{url: 'home'}, isArray: false},
    });
    return Page;
});
