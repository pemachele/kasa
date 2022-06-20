const thePath = window.location.href;
// const path = thePath.substring(thePath.lastIndexOf("/") + 1);

const API =
  "http://ec2-13-58-137-105.us-east-2.compute.amazonaws.com/SACA/index.php/API";

function create_application() {
  $("#application-form").submit(function (e) {
    e.preventDefault();
  });
  var dataObject = {
      code: 117,
      api: 150,
      data: {
        full_name: $("#fullname").val(),
        email: $("#email_address").val(),
        dob: $("#birth_date").val(),
        phone: $("#phonenumber").val(),
        residence_city: $("#residence_city").val(),
        parent_name: $("#parent_name").val(),
        parent_phone: $("#parent_phone").val(),
        school_graduated: $("#school_graduated").val(),
        alevel_combination: $("#alevel_combination").val(),
        education_qualification: $("#education_qualification").val(),
        alevel_results: $("#alevel_results").val(),
        course_option: $("#course_option").val(),
        country_option: $("#counrty_option").val(),
        intake: $("#intake").val(),
        study_reason: $("#study_reason").val(),
        possible_budget: $("#possible_budget").val(),
      },
    },
    n = $("#application-form"),
    d = $("#submit-application");

  n.validate({
    rules: {
      intake: { required: !0 },
    },
  });

  if (n.valid()) {
    $("#loader1").append('<div class="spinner-border"></div>');

    // d.prop("disabled", true),
    $.ajax({
      url: API,
      type: "POST",
      data: JSON.stringify(dataObject),
      content: "application/x-www-form-urlencoded; charset=UTF-8",
      success: function (response) {
        // decode the json string to a js object
        var responseObject = JSON.parse(response);
        // get the code from the create js object using js notation
        var code = responseObject.code;
        // then do the if  for error or success
        if (code === 200) {
          d.prop("disabled", false);
          $("#loader1").empty();
          swal("Application sent!", "KASA will get intouch with you in 48hrs!", "success");
        } else if (code === 300) {
          d.addClass("btn btn-primary btn-block").attr("disabled", 0);
          $("#loader1").empty();
           swal("OOPS!", "something went wrong!", "danger");
        } else {
        }
      },
    });
  }
}

jQuery(document).ready(function () {});
