/*
 * ACES Listener API
 *
 * API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package arkaces/aces-listener-api

type InlineResponse200 struct {

	PageSize int32 `json:"pageSize,omitempty"`

	Page int32 `json:"page,omitempty"`

	Continuation string `json:"continuation,omitempty"`

	Items []SubscriptionEvent `json:"items,omitempty"`
}
