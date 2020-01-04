// const Router = require("express").Router;
// const db = require("../models");

// const secretHtmlRoutes = new Router();

// // HORSE
// secretHtmlRoutes.get("/horse", async (req, res) => {
//   const dbHorses = await db.Horses.findAll({});
//   const dbOwners = await db.Owners.findAll({});
//   res.render("horse", {
//     horses: dbHorses,
//     owners: dbOwners
//   });
//   console.log(dbOwners);
// });

// // OWNER
// secretHtmlRoutes.get("/owner", async (req, res) => {
//   const dbOwners = await db.Owners.findAll({});

//   res.render("owner", {
//     owners: dbOwners
//   });
// });

// // EDIT OWNER
// secretHtmlRoutes.get("/owner/:id", async (req, res) => {
//   const dbOwner = await db.Owners.findOne({ where: { id: req.params.id } });
//   res.render("editOwner", {
//     owner: dbOwner
//   });
// });

// // EDIT HORSE
// secretHtmlRoutes.get("/horse/:id", async (req, res) => {
//   const dbHorse = await db.Horses.findOne({ where: { id: req.params.id } });
//   const dbOwners = await db.Owners.findAll({});
//   res.render("editHorse", {
//     horse: dbHorse,
//     owners: dbOwners
//   });
// });

// // LANDING PAGE
// secretHtmlRoutes.get("/ownerlogin", async (req, res) => {
//   res.render("horseOwnerLoginLanding");
// });

// module.exports = secretHtmlRoutes;
