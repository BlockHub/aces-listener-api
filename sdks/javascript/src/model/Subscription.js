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


import ApiClient from '../ApiClient';





/**
* The Subscription model module.
* @module model/Subscription
* @version 1.0.0
*/
export default class Subscription {
    /**
    * Constructs a new <code>Subscription</code>.
    * @alias module:model/Subscription
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Subscription} obj Optional instance to populate.
    * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subscription();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * Unique identifier for a Subscription.
    * @member {String} id
    */
    id = undefined;
    /**
    * Date the Subscription was created.
    * @member {Date} createdAt
    */
    createdAt = undefined;
    /**
    * @member {module:model/Subscription.StatusEnum} status
    */
    status = undefined;






    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "active"
         * @const
         */
        "active": "active",
    
        /**
         * value: "unsubscribed"
         * @const
         */
        "unsubscribed": "unsubscribed",
    
        /**
         * value: "cancelled"
         * @const
         */
        "cancelled": "cancelled"    
    };



}


