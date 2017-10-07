(function () {
    'use strict';
	
    var app = angular.module('app', [
        'ui.router'
    ]);
	
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {		
		$urlRouterProvider.otherwise('/');
		var viewsList={'home': { templateUrl: 'templates/home.html' },'about': { templateUrl: 'templates/about.html' }};
		$stateProvider
			.state('home', {
				url:'/home',
				views: viewsList
			})
			.state('about', {
				url:'/about',
				views: viewsList
			})
		}
	]);
	
	    app.run(['$rootScope', '$log', function($rootScope, $log){
			
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			$log.debug('stateChangeStart') ;
			//if(fromState.name!=''){
				//angular.element("#uiview-"+fromState.name).removeAttr('ui-view');
			//}

        });
		
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
			
            $log.debug('successfully changed states') ;
            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });
        
        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
            $log.error('The request state was not found: ' + unfoundState);
        });
        
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
            $log.error('An error occurred while changing states: ' + error);
            
            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });
    }]);
	
	app.controller('AppCtrl', function($scope,$rootScope,$state,$compile) {		
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
				$scope.homeId = 1;
				var html="<div ng-include=\"'templates/"+url+".html'\"></div>";
				//var html="<div id='uiview-"+url+"' ui-view='"+url+"'></div>";
				var template = angular.element(html);
				var mobileDialogElement = $compile(template)($scope);
				angular.element("#"+url).append(mobileDialogElement);
				//$state.go(url,{},{location:false});
			}
		};
	});
	
	app.controller('HomeCtrl',function($scope,$rootScope,$state,$compile,$location,$http){
		alert("HomeCtrl,homeId:"+$scope.homeId);
	});
	
	
	
})();