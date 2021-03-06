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


import ApiClient from "../ApiClient";
import Health from '../model/Health';
import InlineResponse200 from '../model/InlineResponse200';
import NotFoundError from '../model/NotFoundError';
import Subscription from '../model/Subscription';
import SubscriptionRequest from '../model/SubscriptionRequest';
import SubscriptionUnsubscribe from '../model/SubscriptionUnsubscribe';
import ValidationError from '../model/ValidationError';

/**
* AcesListener service.
* @module arkaces-listener-client/AcesListenerApi
* @version 1.0.0
*/
export default class AcesListenerApi {

    /**
    * Constructs a new AcesListenerApi. 
    * @alias module:arkaces-listener-client/AcesListenerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the statusGet operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~statusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Health} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Health of node.
     * Get application health information.
     * @param {module:arkaces-listener-client/AcesListenerApi~statusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Health}
     */
    statusGet(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Health;

      return this.apiClient.callApi(
        '/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdEventsGet operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Subscription Events
     * Gets a page of Subscription Events.
     * @param {String} id Subscription Identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Number of items to return per page. (default to 100)
     * @param {Number} opts.page Zero-offset page number to return.
     * @param {String} opts.continuation Continuation param for fetching next page.
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    subscriptionsIdEventsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdEventsGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'page': opts['page'],
        'continuation': opts['continuation']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/subscriptions/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdGet operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets Subscription
     * Get a Subscription by identifier.
     * @param {String} id Subscription Identifier
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    subscriptionsIdGet(id, callback) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdUnsubscribesPost operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsIdUnsubscribesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionUnsubscribe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Unsubscription.
     * Unsubscribes an active Subscription.
     * @param {String} id Subscription Identifier
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsIdUnsubscribesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionUnsubscribe}
     */
    subscriptionsIdUnsubscribesPost(id, callback) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdUnsubscribesPost");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionUnsubscribe;

      return this.apiClient.callApi(
        '/subscriptions/{id}/unsubscribes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsPost operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registers a subscriber node to receive blockchain events.
     * The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener. 
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRequest} opts.subscriptionRequest The request to create a new Subscription.
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    subscriptionsPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['subscriptionRequest'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
