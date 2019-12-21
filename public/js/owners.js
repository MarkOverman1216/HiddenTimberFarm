// Get references to page elements
let $firstName = $("#first");
let $lastName = $("#last");
let $phoneNum = $("#phone");
let $emailAdd = $("#email");
let $streetName = $("#street");
let $cityName = $("#city");
let $stateName = $("#state");
let $zipNum = $("#zip");
let $horseNum = $("#horse");
let $trailerP = $("#tp");

// The API object contains methods for each kind of request we'll make
const API = {
  saveOwner: function(owner) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/owners",
      data: JSON.stringify(owner)
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
    street: "required",
    city: "required",
    state: "required",
    zip: "required",
    horse: "required",
    tp: "required"
  },
  // Specify validation error messages
  messages: {
    first: "Please enter your first name",
    last: "Please enter your last name",
    phone: "Please enter your phone number",
    email: "Please enter a valid email address",
    street: "Please enter your street address",
    city: "Please enter your city",
    state: "Please enter your two-letter state abbreviation ",
    zip: "Please enter your zip code",
    horse: "Please enter how many horses you have",
    tp: "Please enter your trailer parking"
  },
  submitHandler(form, event) {
    event.preventDefault();
    const owner = {
      firstName: $firstName.val(),
      lastName: $lastName.val(),
      phone: $phoneNum.val(),
      email: $emailAdd.val(),
      street: $streetName.val(),
      city: $cityName.val(),
      state: $stateName.val(),
      zip: $zipNum.val(),
      horse: $horseNum.val(),
      tp: $trailerP.val()
    };

    API.saveOwner(owner).then(function() {
      $firstName.val("");
      $lastName.val("");
      $phoneNum.val("");
      $emailAdd.val("");
      $streetName.val("");
      $cityName.val("");
      $stateName.val("");
      $zipNum.val("");
      $horseNum.val("");
      $trailerP.val("");
    });
  }
});
