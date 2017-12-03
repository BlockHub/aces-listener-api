/*
 * ACES Listener API
 * API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * SubscriptionRequest
 */

public class SubscriptionRequest {
  @SerializedName("callbackUrl")
  private String callbackUrl = null;

  @SerializedName("minConfirmations")
  private Integer minConfirmations = null;

  public SubscriptionRequest callbackUrl(String callbackUrl) {
    this.callbackUrl = callbackUrl;
    return this;
  }

   /**
   * Target target URL to POST Encoded Listener events to.
   * @return callbackUrl
  **/
  @ApiModelProperty(required = true, value = "Target target URL to POST Encoded Listener events to.")
  public String getCallbackUrl() {
    return callbackUrl;
  }

  public void setCallbackUrl(String callbackUrl) {
    this.callbackUrl = callbackUrl;
  }

  public SubscriptionRequest minConfirmations(Integer minConfirmations) {
    this.minConfirmations = minConfirmations;
    return this;
  }

   /**
   * Confirmations required before event is sent to subscriber.
   * @return minConfirmations
  **/
  @ApiModelProperty(required = true, value = "Confirmations required before event is sent to subscriber.")
  public Integer getMinConfirmations() {
    return minConfirmations;
  }

  public void setMinConfirmations(Integer minConfirmations) {
    this.minConfirmations = minConfirmations;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SubscriptionRequest subscriptionRequest = (SubscriptionRequest) o;
    return Objects.equals(this.callbackUrl, subscriptionRequest.callbackUrl) &&
        Objects.equals(this.minConfirmations, subscriptionRequest.minConfirmations);
  }

  @Override
  public int hashCode() {
    return Objects.hash(callbackUrl, minConfirmations);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubscriptionRequest {\n");
    
    sb.append("    callbackUrl: ").append(toIndentedString(callbackUrl)).append("\n");
    sb.append("    minConfirmations: ").append(toIndentedString(minConfirmations)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

