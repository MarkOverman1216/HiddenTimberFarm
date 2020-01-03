const Router = require("express").Router;
const db = require("../models");

const dataFarm = Router();

// Get all examples
dataFarm
  .route("/horses/")

  .get(async (_req, res) => {
    const dbHorses = await db.Horses.findAll({});
    res.json(dbHorses);
  })

  .post(async (req, res) => {
    const dbHorses = await db.Horses.create(req.body);
    res.json(dbHorses);
  });

dataFarm.put("/horses/:id", async (req, res) => {
  try {
    const dbHorses = await db.Horses.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(dbHorses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a horse by id
dataFarm.delete("/horses/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };
  const dbHorses = await db.Horses.destroy(options);
  res.json(dbHorses);
});

//   ############################

dataFarm
  .route("/owners/")

  .get(async (_req, res) => {
    const dbOwners = await db.Owners.findAll({});
    res.json(dbOwners);
  })

  .post(async (req, res) => {
    const dbOwners = await db.Owners.create(req.body);
    res.json(dbOwners);
  });

dataFarm.put("/owners/:id", async (req, res) => {
  // console.log(req);
  try {
    const dbOwners = await db.Owners.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(dbOwners);
  } catch (error) {
    res.status(500).send(error);
  }
});

dataFarm.delete("/owners/:id", async (req, res) => {
  // Delete All horses associated with the owner
  const findHorses = {
    where: {
      ownerId: req.params.id
    }
  };
  await db.Horses.destroy(findHorses);

  const options = {
    where: {
      id: req.params.id
    }
  };
  const dbOwners = await db.Owners.destroy(options);
  res.json(dbOwners);
});

module.exports = dataFarm;
