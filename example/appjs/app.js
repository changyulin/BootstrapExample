(function () {
    'use strict';
	
    var app = angular.module('app', [
        'ui.router'
    ]);
	
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url:'/home',
				views: {
					'header': {
						templateUrl: 'templates/homeHeader.html'
					},
					'content': {
						templateUrl: 'templates/home.html'
					},
					'footer': {
						templateUrl: 'templates/homeFooter.html'
					}
				}
			})
			.state('about', {
				url:'/about',
				views:{
					'content':{
						templateUrl: 'templates/about.html'
					}
				}
				
			})
		}
	]);
	
})();