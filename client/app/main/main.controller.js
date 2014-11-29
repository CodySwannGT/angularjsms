'use strict';

angular.module('mydieselmechanicApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.slides = [
      {
        image: 'assets/images/ford-f-250-custom.jpg',
        text: '',
        heading: 'F-250'
      },
      {
        image: 'assets/images/ford-f-350-custom-2.jpg',
        text: '',
        heading: 'F-350'
      },
      {
        image: 'assets/images/ford-f-350-custom.jpg',
        text: '',
        heading: 'F-350'
      },
      {
        image: 'assets/images/jeep-custom.jpg',
        text: '',
        heading: 'Jeep'
      },
      {
        image: 'assets/images/jeep-wrangler-custom.jpg',
        text: '',
        heading: 'Jeep Wrangler'
      }
    ];

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.photosInterval = 5000;

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
