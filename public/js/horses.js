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
    out: "required",
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
    out: "Enter move out date",
    owner: "Enter owner id"
  },
  submitHandler(form, event) {
    event.preventDefault();
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
      moveOutDate: $outDate.val(),
      ownerId: $ownerId.val()
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
