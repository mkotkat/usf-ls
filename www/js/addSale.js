// Variable to hold request
var html_request;

// Bind to the submit event of our form
//$("#foo").submit(function(event){
//  $("#usf-www-SubscriberForm").submit(function(event){


  var request = {
      
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        // document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('submitform').addEventListener('click', this.submitform, false);
    },
    
    submitform : function($){

        // Abort any pending request
        if (html_request) {
            html_request.abort();
        }
        // setup some local variables
        //var $form = $(this);
        var $form = $(this);
        //var $form = (document.getElementById('usf-ls-AddSalesForm'));
    
        // Let's select and cache all the fields
        // var $inputs = $form.find("input, select, button, textarea");
        var $inputs = $form.find("input, select, button, textarea");
    
        // Serialize the data in the form
        var serializedData = $form.serialize();
    
        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);
    
    
        
      // Fire off the request to /form.php
      //  request = $.ajax({
      //      url: "SCRIPT URL GOES HERE",
      //      type: "post",
      //      data: serializedData
      //  });
      
        // $ echo 'var sendata = { "form_script_host": "google", "form_script_url": "https://script.google.com/macros/s/AKfycbwHlxyMgAxNZ8P-uIDb3ViKS2qcmbyIx37Gtvtm0oNtlmwS4v-A/exec" }; module.exports = sendata; ' > sendata.js 
        // var config = require('../sensitive_data/config');
        // console.log(config.form_script_url);
    
   // https://script.google.com/macros/s/AKfycbxtLitamwH3VQik3laGJoVEJV47k2AktROR0cdspwmUQT_3MVO2/exec
    
      // Fire off the request to /form.php
        html_request = $.ajax({
            url: "https://script.google.com/a/macros/kotkat.org/s/AKfycbxtLitamwH3VQik3laGJoVEJV47k2AktROR0cdspwmUQT_3MVO2/exec",
            type: "post",
            data: serializedData
        });
    
        // Callback handler that will be called on success
        html_request.done(function (response, textStatus, jqXHR){
            // Log a message to the console
            console.log("Hooray, it worked!");
            console.log(response);
            console.log(textStatus);
            console.log(jqXHR);
        });
    
        // Callback handler that will be called on failure
        html_request.fail(function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });
    
        // Callback handler that will be called regardless
        // if the request failed or succeeded
        html_request.always(function () {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });
    
        // Prevent default posting of form
        event.preventDefault();
    }

};