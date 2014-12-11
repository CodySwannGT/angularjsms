'use strict';

angular.module('mydieselmechanicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('auto', {
        abstract: true,
        url: '/auto',
        templateUrl: 'app/auto/auto.html',
        controller: 'AutoCtrl'
      })
      .state('auto.detail', {
        url: '/:id',
        templateUrl: 'app/auto/auto.detail.html',
        controller: 'AutoCtrl',
        
        onEnter: function(){
          console.log('enter contacts.detail');
        }
    });
  });