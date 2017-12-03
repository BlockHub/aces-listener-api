/**
 * ACES Listener API
 * API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AcesListenerApi);
  }
}(this, function(expect, AcesListenerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AcesListenerApi.SubscriptionRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SubscriptionRequest', function() {
    it('should create an instance of SubscriptionRequest', function() {
      // uncomment below and update the code to test SubscriptionRequest
      //var instane = new AcesListenerApi.SubscriptionRequest();
      //expect(instance).to.be.a(AcesListenerApi.SubscriptionRequest);
    });

    it('should have the property callbackUrl (base name: "callbackUrl")', function() {
      // uncomment below and update the code to test the property callbackUrl
      //var instane = new AcesListenerApi.SubscriptionRequest();
      //expect(instance).to.be();
    });

    it('should have the property minConfirmations (base name: "minConfirmations")', function() {
      // uncomment below and update the code to test the property minConfirmations
      //var instane = new AcesListenerApi.SubscriptionRequest();
      //expect(instance).to.be();
    });

  });

}));
