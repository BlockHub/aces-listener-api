# coding: utf-8

"""
    ACES Listener API

    API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import sys
from setuptools import setup, find_packages

NAME = "aces-listener-api"
VERSION = "1.0.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = ["urllib3 >= 1.15", "six >= 1.10", "certifi", "python-dateutil"]

setup(
    name=NAME,
    version=VERSION,
    description="ACES Listener API",
    author_email="",
    url="",
    keywords=["Swagger", "ACES Listener API"],
    install_requires=REQUIRES,
    packages=find_packages(),
    include_package_data=True,
    long_description="""\
    API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 
    """
)
