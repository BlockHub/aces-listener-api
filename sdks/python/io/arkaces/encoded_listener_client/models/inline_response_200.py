# coding: utf-8

"""
    ACES Listener API

    API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from pprint import pformat
from six import iteritems
import re


class InlineResponse200(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """


    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'page_size': 'int',
        'page': 'int',
        'continuation': 'str',
        'items': 'list[SubscriptionEvent]'
    }

    attribute_map = {
        'page_size': 'pageSize',
        'page': 'page',
        'continuation': 'continuation',
        'items': 'items'
    }

    def __init__(self, page_size=None, page=None, continuation=None, items=None):
        """
        InlineResponse200 - a model defined in Swagger
        """

        self._page_size = None
        self._page = None
        self._continuation = None
        self._items = None
        self.discriminator = None

        if page_size is not None:
          self.page_size = page_size
        if page is not None:
          self.page = page
        if continuation is not None:
          self.continuation = continuation
        if items is not None:
          self.items = items

    @property
    def page_size(self):
        """
        Gets the page_size of this InlineResponse200.

        :return: The page_size of this InlineResponse200.
        :rtype: int
        """
        return self._page_size

    @page_size.setter
    def page_size(self, page_size):
        """
        Sets the page_size of this InlineResponse200.

        :param page_size: The page_size of this InlineResponse200.
        :type: int
        """

        self._page_size = page_size

    @property
    def page(self):
        """
        Gets the page of this InlineResponse200.

        :return: The page of this InlineResponse200.
        :rtype: int
        """
        return self._page

    @page.setter
    def page(self, page):
        """
        Sets the page of this InlineResponse200.

        :param page: The page of this InlineResponse200.
        :type: int
        """

        self._page = page

    @property
    def continuation(self):
        """
        Gets the continuation of this InlineResponse200.

        :return: The continuation of this InlineResponse200.
        :rtype: str
        """
        return self._continuation

    @continuation.setter
    def continuation(self, continuation):
        """
        Sets the continuation of this InlineResponse200.

        :param continuation: The continuation of this InlineResponse200.
        :type: str
        """

        self._continuation = continuation

    @property
    def items(self):
        """
        Gets the items of this InlineResponse200.

        :return: The items of this InlineResponse200.
        :rtype: list[SubscriptionEvent]
        """
        return self._items

    @items.setter
    def items(self, items):
        """
        Sets the items of this InlineResponse200.

        :param items: The items of this InlineResponse200.
        :type: list[SubscriptionEvent]
        """

        self._items = items

    def to_dict(self):
        """
        Returns the model properties as a dict
        """
        result = {}

        for attr, _ in iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """
        Returns the string representation of the model
        """
        return pformat(self.to_dict())

    def __repr__(self):
        """
        For `print` and `pprint`
        """
        return self.to_str()

    def __eq__(self, other):
        """
        Returns true if both objects are equal
        """
        if not isinstance(other, InlineResponse200):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other
