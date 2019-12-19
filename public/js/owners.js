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

const $submitBtn = $("#submit");
let $ownersList = $("#owners-list");

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

// refreshOwners gets new owners from the db and repopulates the list
const refreshOwners = function() {
  API.getOwners().then(function(data) {
    let $owners = data.map(function(owner) {
      let $a = $("<a>")
        .text(owner.lastName)
        .attr("href", "/owner/" + owner.id);

      let $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": owner.id
        })
        .append($a);

      let $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $ownersList.empty();
    $ownersList.append($owners);
  });
};

// handleFormSubmit is called whenever we submit a new owner
// Save the new owner to the db and refresh the list
let handleFormSubmit = function(event) {
  event.preventDefault();

  let owner = {
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
  // function valideteForm() {
  //   let ownerData = owner.length;
  //   let isValid = true;
  //   for (let i = 0; i < ownerData; i++) {
  //     if (owner[i] === "") {
  //       isValid = false;
  //     }
  //   }
  //   return isValid;
  // }
  console.log(owner);
  if (!(owner.firstName && owner.lastName)) {
    alert("You must fill out the form");
    return;
  }

  API.saveOwner(owner).then(function() {
    refreshOwners();
  });

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
};

// handleDeleteBtnClick is called when an owner's delete button is clicked
// Remove the owner from the db and refresh the list
const handleDeleteBtnClick = function() {
  let idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteOwner(idToDelete).then(function() {
    refreshOwners();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$ownersList.on("click", ".delete", handleDeleteBtnClick);
