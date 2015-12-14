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
        image: 'assets/images/f-250/1.jpg',
        text: '',
        heading: 'F-250',
        id: 1

      },
      {
        image: 'assets/images/f-350/1.jpg',
        text: '',
        heading: 'F-350',
        id: 2
      },
      {
        image: 'assets/images/jeep/1.jpg',
        text: '',
        heading: 'Jeep',
        id: 3
      },
      {
        image: 'assets/images/jeep-wrangler/1.jpg',
        text: '',
        heading: 'Jeep Wrangler',
        id: 4
      },
      {
        image: 'assets/images/mustang/1.jpg',
        text: '',
        heading: 'Mustang',
        id: 5
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
