// This is connected to the contactUs.handlebars file, but we need to have something happen when the user clicks on SUBMIT.

// Get references to page elements
let $firstNameContact = $("#first");
let $lastNameContact = $("#last");
let $phoneNumContact = $("#phone");
let $emailContact = $("#email");
let $messageContact = $("#message-to-farm");

// The API object contains methods for each kind of request we'll make
const API = {
  saveContact: function(contact) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/contact",
      data: JSON.stringify(contact)
    });
  }
};
$(".validateForm").validate({
  rules: {
    first: "required",
    last: "required",
    phone: "required",
    email: {
      required: true,
      email: true
    },
    message: "required"
  },
  // Specify validation error messages
  messages: {
    first: "Please enter your first name",
    last: "Please enter your last name",
    phone: "Please enter your phone number",
    email: "Please enter a valid email address",
    message: "Briefly state what we can help you with"
  },
  submitHandler(form, event) {
    event.preventDefault();

    const contact = {
      firstName: $firstNameContact.val(),
      lastName: $lastNameContact.val(),
      phone: $phoneNumContact.val(),
      email: $emailContact.val(),
      message: $messageContact.val()
    };
    API.saveContact(contact).then(function() {
      $firstNameContact.val("");
      $lastNameContact.val("");
      $phoneNumContact.val("");
      $emailContact.val("");
      $messageContact.val("");
    });
  }
});
