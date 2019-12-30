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
// let $trailerP = $("input[name='radio']:checked");
let $trailerP = $("#tp");
let $ownersList = $("tbody");

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
  },
  getOwners: function() {
    return $.ajax({
      url: "api/owners",
      type: "GET"
    });
  },
  deleteOwner: function(id) {
    return $.ajax({
      url: "api/owners/" + id,
      type: "DELETE"
    });
  }
};

// input validation before submitting to database
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
    // let choose = $trailerP.val();
    // console.log(choose);
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
      // trailerParking: choose
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
      refreshOwners();
    });
  }
});

const refreshOwners = function() {
  API.getOwners().then(function(data) {
    let $owners = data.map(function(owner) {
      let $a1 = $("<a>")
        .text("Update Data")
        .attr("href", "/owner/" + owner.id);

      let $a2 = $("<a>")
        .text("Delete Owner")
        .addClass("delete");

      let $td1 = $("<td>").text(owner.firstName);
      let $td2 = $("<td>").text(owner.lastName);
      let $td3 = $("<td>").append($a1);
      let $td4 = $("<td>").append($a2);

      let $tr = $("<tr>")
        .attr("data-id", owner.id)
        .append($td1, $td2, $td3, $td4);

      return $tr;
    });
    $ownersList.empty();
    $ownersList.append($owners);
  });
};

// delete owner
const deleteBtn = function() {
  let idToDelete = $(this)
    .parent("td")
    .parent("tr")
    .attr("data-id");

  API.deleteOwner(idToDelete).then(function() {
    refreshOwners();
  });
};

$ownersList.on("click", ".delete", deleteBtn);
