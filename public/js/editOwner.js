let $firstName = $("#first");
let $ownerId = $("#ownerId");
let $lastName = $("#last");
let $phoneNum = $("#phone");
let $emailAdd = $("#email");
let $streetName = $("#street");
let $cityName = $("#city");
let $stateName = $("#state");
let $zipNum = $("#zip");
let $horseNum = $("#horse");
let $trailerP = $("#tp");
console.log($ownerId);
const API = {
  editOwner: function(formData) {
    // console.log($ownerId.text(), formData);
    return $.ajax({
      url: "/api/owners/" + $ownerId.text(),
      type: "PUT",
      data: { ...formData }
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
    first: "Enter client's first name",
    last: "Enter client's last name",
    phone: "Enter client's phone number",
    email: "Enter client's valid email address",
    street: "Enter client's street address",
    city: "Enter client's city",
    state: "Enter client's two-letter state abbreviation ",
    zip: "Enter client's zip code",
    horse: "Enter how many horses client has",
    tp: "Enter client's trailer parking"
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
      numHorses: $horseNum.val(),
      trailerParking: $trailerP.val()
    };
    API.editOwner(owner).then(function() {
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
