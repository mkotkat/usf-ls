// Variable to hold request
var request;

// Bind to the submit event of our form
//$("#foo").submit(function(event){
  $("#usf-ls-AddSalesForm").submit(function(event){
  

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    //// Problem: Form will not submit diabled inputs "input:disabled" <input id='username' name='username' type='text' rows='2' disabled></input>
    //// =======
    //// solution #1
    //// enable the control -> submit , then disable again if applicable 
    //document.getElementById("username").disabled = false;
    //// solution #2
    //// do not use disabled attribute - instead use readonly attribute
    //// <input id='username' name='username' type='text' rows='2' readonly></input>
    //// -- problem solved using solution #2
    
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


  // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxtLitamwH3VQik3laGJoVEJV47k2AktROR0cdspwmUQT_3MVO2/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        //Go Home
        window.location = "index.html?username=" + document.getElementById("username").value;
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
    
    // scan: function() {
    //     console.log('scanning');
        
    //     cordova.plugins.barcodeScanner.scan(
    //       function (result) {
    //           alert("We got a barcode\n" +
    //                 "Result: " + result.text + "\n" +
    //                 "Format: " + result.format + "\n" +
    //                 "Cancelled: " + result.cancelled);
    //       }, 
    //       function (error) {
    //           alert("Scanning failed: " + error);
    //       },
    //       {
    //           "preferFrontCamera" : true, // iOS and Android
    //           "showFlipCameraButton" : true, // iOS and Android
    //           "prompt" : "Place a barcode inside the scan area", // supported on Android only
    //           "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    //           "orientation" : "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
    //       }
    //     );
    // };
    
});

