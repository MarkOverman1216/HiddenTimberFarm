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

// const $submitBtn = $("#submit");
// let $horsesList = $("#horses-list");

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
  }
  // ,
  // getHorses: function() {
  //   return $.ajax({
  //     url: "api/horses",
  //     type: "GET"
  //   });
  // },
  // deleteHorse: function(id) {
  //   return $.ajax({
  //     url: "api/horses/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshHorses gets new horses from the db and repopulates the list
// const refreshHorses = function() {
//   API.getHorses().then(function(data) {
//     let $horses = data.map(function(horse) {
//       let $a = $("<a>")
//         .text(horse.name)
//         .attr("href", "/horse/" + horse.id);

//       let $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": horse.id
//         })
//         .append($a);

//       let $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $horsesList.empty();
//     $horsesList.append($horses);
//   });
// };

// handleFormSubmit is called whenever we submit a new horse
// Save the new horse to the db and refresh the list
// const handleFormSubmit = function(event) {
//   event.preventDefault();

//   let horse = {
//     name: $horseName.val(),
//     barnName: $barnName.val(),
//     sex: $horseSex.val(),
//     breed: $horseBreed.val(),
//     color: $horseColor.val(),
//     description: $horseDes.val(),
//     chipped: $horseChip.val(),
//     tattooed: $horseTatto.val(),
//     vet: $horseVet.val(),
//     farrier: $horseFarr.val(),
//     vacDate: $vacDate.val(),
//     vacGiven: $vacType.val(),
//     moveInDate: $inDate.val(),
//     stallAssignment: $stallAssign.val(),
//     quarantine: $horseQua.val(),
//     moveOutDate: $outDate.val(),
//     ownerId: $ownerId.val()
//   };

//   if (!(horse.name && horse.barnName)) {
//     alert("You must fill out the form");
//     return;
//   }

//   API.saveHorse(horse).then(function() {
//     refreshHorses();
//   });

//   $horseName.val("");
//   $barnName.val("");
//   $horseSex.val("");
//   $horseBreed.val("");
//   $horseColor.val("");
//   $horseDes.val("");
//   $horseChip.val("");
//   $horseTatto.val("");
//   $horseVet.val("");
//   $horseFarr.val("");
//   $vacDate.val("");
//   $vacType.val("");
//   $inDate.val("");
//   $stallAssign.val("");
//   $horseQua.val("");
//   $outDate.val("");
//   $ownerId.val("");
// };

// handleDeleteBtnClick is called when an horse's delete button is clicked
// Remove the horse from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteHorse(idToDelete).then(function() {
//     refreshHorses();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $horsesList.on("click", ".delete", handleDeleteBtnClick);

$(".validateForm").validate({
  rules: {
    name: "required",
    barn: "required",
    sex: "required",
    breed: "required",
    color: "required",
    description: "required",
    chipped: "required",
    tattooed: "required",
    vet: "required",
    farrier: "required",
    date: "required",
    type: "required",
    in: "required",
    stall: "required",
    quarantine: "required",
    owner: "required"
  },
  // Specify validation error messages
  messages: {
    name: "Enter horse's name",
    barn: "Enter horse's barn name",
    sex: "Choose one",
    breed: "Enter horse's breed",
    color: "Enter horse's color",
    description: "Enter horse's description",
    chipped: "Choose one",
    tattooed: "Choose one",
    vet: "Enter vet",
    farrier: "Enter farrier",
    date: "Enter vaccination date",
    type: "Enter vaccination type",
    in: "Enter move in date",
    stall: "Enter stall assignment",
    quarantine: "Choose one",
    owner: "Enter owner id"
  },
  submitHandler(form, event) {
    event.preventDefault();
    const date = $outDate.val();
    if (date === "") {
      editedMoveOutDate: null;
    } else {
      editedMoveOutDate: date;
    }
    const horse = {
      name: $horseName.val(),
      barnName: $barnName.val(),
      sex: $horseSex.val(),
      breed: $horseBreed.val(),
      color: $horseColor.val(),
      description: $horseDes.val(),
      chipped: $horseChip.val(),
      tattooed: $horseTatto.val(),
      vet: $horseVet.val(),
      farrier: $horseFarr.val(),
      vacDate: $vacDate.val(),
      vacGiven: $vacType.val(),
      moveInDate: $inDate.val(),
      stallAssignment: $stallAssign.val(),
      quarantine: $horseQua.val(),
      moveOutDate: editedMoveOutDate,
      ownerId: $ownerId.val()
      // convert the date moment to unix time stamp
    };
    API.saveHorse(horse).then(function() {
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
    });
  }
});
