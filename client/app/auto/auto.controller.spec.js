'use strict';

describe('Controller: AutoCtrl', function () {

  // load the controller's module
  beforeEach(module('mydieselmechanicApp'));

  var AutoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutoCtrl = $controller('AutoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
