// Get references to page elements
let $horseName = $("#name");
let $barnName = $("#barn");
let $horseSex = $("#sex");
let $horseBreed = $("#breed");
let $horseColor = $("#color");
let $horseDes = $("#description");
let $horseChip = $("#chipped");
let $horseTatto = $("#tattooed");
let $horseVet = $("#vet");
let $horseFarr = $("#farrier");
let $vacDate = $("#date");
let $vacType = $("#type");
let $inDate = $("#in");
let $stallAssign = $("#stall");
let $horseQua = $("#quarantine");
let $outDate = $("#out");
let $ownerId = $("#owner");

const $submitBtn = $("#submit");
let $horsesList = $("#horses-list");

// The API object contains methods for each kind of request we'll make
const API = {
  saveHorse: function(horse) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/horses",
      data: JSON.stringify(horse)
    });
  },
  getHorses: function() {
    return $.ajax({
      url: "api/horses",
      type: "GET"
    });
  },
  deleteHorse: function(id) {
    return $.ajax({
      url: "api/horses/" + id,
      type: "DELETE"
    });
  }
};

// refreshHorses gets new horses from the db and repopulates the list
const refreshHorses = function() {
  API.getHorses().then(function(data) {
    let $horses = data.map(function(horse) {
      let $a = $("<a>")
        .text(horse.name)
        .attr("href", "/horse/" + horse.id);

      let $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": horse.id
        })
        .append($a);

      let $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $horsesList.empty();
    $horsesList.append($horses);
  });
};

// handleFormSubmit is called whenever we submit a new horse
// Save the new horse to the db and refresh the list
const handleFormSubmit = function(event) {
  event.preventDefault();

  let horse = {
    name: $horseName.val().trim(),
    barnName: $barnName.val().trim(),
    sex: $horseSex.val().trim(),
    breed: $horseBreed.val().trim(),
    color: $horseColor.val().trim(),
    description: $horseDes.val().trim(),
    chipped: $horseChip.val().trim(),
    tattooed: $horseTatto.val().trim(),
    vet: $horseVet.val().trim(),
    farrier: $horseFarr.val().trim(),
    vacDate: $vacDate.val().trim(),
    vacGiven: $vacType.val().trim(),
    moveInDate: $inDate.val().trim(),
    stallAssignment: $stallAssign.val().trim(),
    quarantine: $horseQua.val().trim(),
    moveOutDate: $outDate.val().trim(),
    ownerId: $ownerId.val().trim()
  };

  if (!(horse.name && horse.barnName)) {
    alert("You must fill out the form");
    return;
  }

  API.saveHorse(horse).then(function() {
    refreshHorses();
  });

  $horseName.val("");
  $barnName.val("");
  $horseSex.val("");
  $horseBreed.val("");
  $horseColor.val("");
  $horseDes.val("");
  $horseChip.val("");
  $horseTatto.val("");
  $horseVet.val("");
  $horseFarr.val("");
  $vacDate.val("");
  $vacType.val("");
  $inDate.val("");
  $stallAssign.val("");
  $horseQua.val("");
  $outDate.val("");
  $ownerId.val("");
};

// handleDeleteBtnClick is called when an horse's delete button is clicked
// Remove the horse from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteHorse(idToDelete).then(function() {
    refreshHorses();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$horsesList.on("click", ".delete", handleDeleteBtnClick);
