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
				views: {'home': { templateUrl: 'templates/home.html' }}
			})
			.state('about', {
				url:'/about',
				views:{ 'about': { templateUrl: 'templates/about.html' }}
			})
		}
	]);
	
	app.controller('AppCtrl', function($scope,$state,$compile) {
		var vm=this;
		vm.addTab=function (title, url){
			if ($('#tt').tabs('exists', title)){
				$('#tt').tabs('select', title);
			} else {
				var content = "<div id='"+url+"'></div>";
				$('#tt').tabs('add',{
					title:title,
					content:content,
					closable:true
				});
				
				var html="<div ui-view='"+url+"'></div>";
				var template = angular.element(html);
				var mobileDialogElement = $compile(template)($scope);
				angular.element("#"+url).append(mobileDialogElement);
				$state.go(url);
			}
		};
	});
	
	
	
})();