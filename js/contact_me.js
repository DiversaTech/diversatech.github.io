$(function() {

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          return;
        }
        form.classList.add('was-validated');
        // subscribe to newsletter
        var email = $("input#email").val();
        if ($('#newsletter').is(':checked')) {
          // mailchimp subscription form POST url
          subscribe('https://diversatech.us10.list-manage.com/subscribe/post?u=6e9fc7a7c79f79184aa5f3d30&amp;id=85796139d6', {EMAIL: email});
        }
      }, false);
    });
  }, false);

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // var forms = document.getElementsByClassName('needs-validation');
  //
  // $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
  //   preventSubmit: true,
  //   submitError: function($form, event, errors) {
  //     // additional error messages or events
  //   },
  //   submitSuccess: function($form, event) {
  //     event.preventDefault(); // prevent default submit behaviour
  //
  //     // Loop over the forms and prevent submission
  //     if ($form[0].checkValidity() === false) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //       $form[0].classList.add('was-validated');
  //       return;
  //     }
  //     $form[0].classList.add('was-validated');
  //
  //     // get values from FORM
  //     var first_name = $("input#first_name").val();
  //     var last_name = $("input#last_name").val();
  //     var email = $("input#email").val();
  //     var company = $("input#company").val();
  //     var message = $("textarea#message").val();
  //     // var firstName = name; // For Success/Failure Message
  //     // // Check for white space in name for Success/Fail message
  //     // if (firstName.indexOf(' ') >= 0) {
  //     //   firstName = name.split(' ').slice(0, -1).join(' ');
  //     // }
  //     $this = $("#sendMessageButton");
  //     $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
  //     $.ajax({
  //       url: "/mail/contact_me.php",
  //       type: "POST",
  //       data: {
  //         first_name: first_name,
  //         last_name: last_name,
  //         email: email,
  //         company: company,
  //         message: message
  //       },
  //       cache: false,
  //       success: function() {
  //         // subscribe to newsletter
  //         var newsletter_checked = $('#newsletter').isChecked;
  //         if (newsletter_checked) {
  //           // mailchimp subscription form POST url
  //           post('https://diversatech.us10.list-manage.com/subscribe/post?u=6e9fc7a7c79f79184aa5f3d30&amp;id=85796139d6', {email: email});
  //         }
  //
  //         // Success message modal
  //         $('#submitForm').show();
  //         //clear all fields
  //         $('#contactForm').trigger("reset");
  //       },
  //       error: function() {
  //         // Fail message
  //         $('#success').html("<div class='alert alert-danger'>");
  //         $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
  //           .append("</button>");
  //         $('#success > .alert-danger').append($("<strong>").text("Sorry " + first_name + ", it seems that my mail server is not responding. Please try again later!"));
  //         $('#success > .alert-danger').append('</div>');
  //       },
  //       complete: function() {
  //         setTimeout(function() {
  //           $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
  //         }, 1000);
  //       }
  //     });
  //   },
  //   filter: function() {
  //     return $(this).is(":visible");
  //   },
  // });
  //
  // $("a[data-toggle=\"tab\"]").click(function(e) {
  //   e.preventDefault();
  //   $(this).tab("show");
  // });
});

// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
// });

// Post to the provided URL with the specified parameters.
function subscribe(path, parameters) {
    var form = $('<form></form>');

    form.attr("method", "post");
    form.attr("action", path);

    $.each(parameters, function(key, value) {
        var field = $('<input></input>');

        field.attr("type", "hidden");
        field.attr("id", "mce-EMAIL");
        field.attr("name", key);
        field.attr("value", value);

        form.append(field);
    });

    // The form needs to be a part of the document in
    // order for us to be able to submit it.
    $(document.body).append(form);
    form.submit();
}
