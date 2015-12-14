'use strict';

angular.module('mydieselmechanicApp')
  .controller('AutoCtrl', ['$scope','$stateParams',function ($scope,$stateParams) {
    
    if ($stateParams.id) {
      var autos = [
        {
          name: 'F-250',
          owner: 'Cody Swann',
          images: [
            {image: 'assets/images/f-250/1.jpg'},
            {image: 'assets/images/f-250/2.jpg'},
            {image: 'assets/images/f-250/3.jpg'}
          ],
          /*jshint multistr: true */
          quote: '<blockquote>\
            <p>Joe and his team literally saved my truck.</p>\
            <p>When I brought it to him, I was considering selling it and getting what I could for it because I was having so many problems.</p>\
            <p>After some honest discussions, I decided to let Joe\'s team try and fix it and haven\'t had a problem since.</p>\
            <footer>Cody Swann <cite title="Source Title">2006 F-250</cite></footer>\
          </blockquote>'
        },
        {
          name: 'F-350',
          images: [
            {image: 'assets/images/f-350/1.jpg'},
            {image: 'assets/images/f-350/2.jpg'}
          ]
        },
        {
          name: 'Jeep',
          images: [
            {image: 'assets/images/jeep/1.jpg'}
          ]
        },
        {
          name: 'Jeep Wranger',
          images: [
            {image: 'assets/images/jeep-wrangler/1.jpg'}
          ]
        },
        {
          name: 'Mustang',
          images: [
            {image: 'assets/images/mustang/1.jpg'}
          ]
        }
      ];

      $scope.auto = autos[$stateParams.id-1];


    }
  }]);
