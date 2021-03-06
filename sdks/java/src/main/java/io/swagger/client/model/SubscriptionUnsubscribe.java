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
import org.threeten.bp.OffsetDateTime;

/**
 * SubscriptionUnsubscribe
 */

public class SubscriptionUnsubscribe {
  @SerializedName("id")
  private String id = null;

  @SerializedName("createdAt")
  private OffsetDateTime createdAt = null;

  public SubscriptionUnsubscribe id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Unsubscription identifier
   * @return id
  **/
  @ApiModelProperty(value = "Unsubscription identifier")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public SubscriptionUnsubscribe createdAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Date the Unsubscription was created.
   * @return createdAt
  **/
  @ApiModelProperty(value = "Date the Unsubscription was created.")
  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SubscriptionUnsubscribe subscriptionUnsubscribe = (SubscriptionUnsubscribe) o;
    return Objects.equals(this.id, subscriptionUnsubscribe.id) &&
        Objects.equals(this.createdAt, subscriptionUnsubscribe.createdAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, createdAt);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubscriptionUnsubscribe {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
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

