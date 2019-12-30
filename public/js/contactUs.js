// This is connected to the contactUs.handlebars file, but we need to have something happen when the user clicks on SEND.

// Get references to page elements
let $nameContact = $("#name");
let $emailContact = $("#email");
let $phoneNumContact = $("#phone");
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
    name: "required",
    email: {
      required: true,
      email: true
    },
    phone: "required",
    message: "required"
  },
  // Specify validation error messages
  messages: {
    name: "Please enter your first and last name",
    email: "Please enter a valid email address",
    phone: "Please enter your phone number",
    message: "Briefly state what we can help you with"
  },
  submitHandler(form, event) {
    event.preventDefault();

    const contact = {
      name: $nameContact.val(),
      email: $emailContact.val(),
      phone: $phoneNumContact.val(),
      message: $messageContact.val()
    };
    API.saveContact(contact).then(function() {
      $nameContact.val("");
      $emailContact.val("");
      $phoneNumContact.val("");
      $messageContact.val("");
    });
  }
});
