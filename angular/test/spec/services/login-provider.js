'use strict';

describe('Service: loginProvider', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var $httpBackend,
  $rootScope,
  loginProvider,
  // apiURL = 'http://localhost:3000/auth',
  apiURL = '//api.test/auth',
  statusMessages = {
    '201': 'logowanie poprawne',
    '400': 'niepoprawne dane',
    '401': 'niepoprawne login lub hasło',
    '500': 'błąd usługi'
  };

  beforeEach(inject(function (_$httpBackend_, _$rootScope_, _loginProvider_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    loginProvider = _loginProvider_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should make a POST request to the backend', function() {
    $httpBackend.expect('POST', apiURL)
    .respond(201, {});
    loginProvider.getResponse({ email: 'test@devoth.pl', pass: 'asdBCY4' });
    $httpBackend.flush();
  });

  it('should set correct message when 201 status is received', function() {
    var testedStatus = 201;
    var data = { status: testedStatus };
    var expectedData = { status: testedStatus, statusText: statusMessages[testedStatus] };

    expect( JSON.stringify( loginProvider.withMessage(data) ) )
    .toBe( JSON.stringify( expectedData ) );
  });

  it('should set correct message when 400 status is received', function() {
    var testedStatus = 400;
    var data = { status: testedStatus };
    var expectedData = { status: testedStatus, statusText: statusMessages[testedStatus] };

    expect( JSON.stringify( loginProvider.withMessage(data) ) )
    .toBe( JSON.stringify( expectedData ) );
  });

  it('should set correct message when 401 status is received', function() {
    var testedStatus = 401;
    var data = { status: testedStatus };
    var expectedData = { status: testedStatus, statusText: statusMessages[testedStatus] };

    expect( JSON.stringify( loginProvider.withMessage(data) ) )
    .toBe( JSON.stringify( expectedData ) );
  });

  it('should set correct message when 500 status is received', function() {
    var testedStatus = 500;
    var data = { status: testedStatus };
    var expectedData = { status: testedStatus, statusText: statusMessages[testedStatus] };

    expect( JSON.stringify( loginProvider.withMessage(data) ) )
    .toBe( JSON.stringify( expectedData ) );
  });

});
