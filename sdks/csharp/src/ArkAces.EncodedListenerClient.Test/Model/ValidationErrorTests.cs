/* 
 * ACES Listener API
 *
 * API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */


using NUnit.Framework;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using ArkAces.EncodedListenerClient.Api;
using ArkAces.EncodedListenerClient.Model;
using ArkAces.EncodedListenerClient.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace ArkAces.EncodedListenerClient.Test
{
    /// <summary>
    ///  Class for testing ValidationError
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the model.
    /// </remarks>
    [TestFixture]
    public class ValidationErrorTests
    {
        // TODO uncomment below to declare an instance variable for ValidationError
        //private ValidationError instance;

        /// <summary>
        /// Setup before each test
        /// </summary>
        [SetUp]
        public void Init()
        {
            // TODO uncomment below to create an instance of ValidationError
            //instance = new ValidationError();
        }

        /// <summary>
        /// Clean up after each test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of ValidationError
        /// </summary>
        [Test]
        public void ValidationErrorInstanceTest()
        {
            // TODO uncomment below to test "IsInstanceOfType" ValidationError
            //Assert.IsInstanceOfType<ValidationError> (instance, "variable 'instance' is a ValidationError");
        }


        /// <summary>
        /// Test the property 'Code'
        /// </summary>
        [Test]
        public void CodeTest()
        {
            // TODO unit test for the property 'Code'
        }
        /// <summary>
        /// Test the property 'Message'
        /// </summary>
        [Test]
        public void MessageTest()
        {
            // TODO unit test for the property 'Message'
        }
        /// <summary>
        /// Test the property 'FieldErrors'
        /// </summary>
        [Test]
        public void FieldErrorsTest()
        {
            // TODO unit test for the property 'FieldErrors'
        }

    }

}
