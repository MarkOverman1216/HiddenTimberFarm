const Router = require("express").Router;
const db = require("../models");

const htmlRoutes = new Router();

htmlRoutes.get("/", async (req, res) => {
  const dbHorses = await db.Horses.findAll({});
  // const dbOwners = await db.Owners.findAll({});

  res.render("horse", {
    msg: "Welcome!",
    horses: dbHorses
    // owners: dbOwners
  });
});

// Load example page and pass in an example by id
htmlRoutes.get("/example/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };

  const dbExample = await db.Example.findOne(options);

  res.render("example", {
    example: dbExample
  });
});

// Render 404 page for any unmatched routes
htmlRoutes.get("*", async (req, res) => {
  res.render("404");
});

module.exports = htmlRoutes;
