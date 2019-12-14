const Router = require("express").Router;
const db = require("../../models");

const horsesData = Router();

// // Get all examples
// exampleRoutes
//   .route("/")

//   .get(async (_req, res) => {
//     const dbExamples = await db.Example.findAll({});
//     res.json(dbExamples);
//   })

//   .post(async (req, res) => {
//     const dbExample = await db.Example.create(req.body);
//     res.json(dbExample);
//   });

// Delete an example by id
horsesData.delete("/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };
  const dbHorses = await db.Horses.destroy(options);
  res.json(dbHorses);
});

module.exports = horsesData;
