const Router = require("express").Router;

const dataFarm = Router();

// Get all examples
dataFarm
  .route("/horses/")

  .get(async (_req, res) => {
    const dbHorses = await db.Horse.findAll({});
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
        id: req.body.id
      }
    });
    res.json(dbHorses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete an example by id
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
    const dbHorses = await db.Horses.create(req.body);
    res.json(dbHorses);
  });

dataFarm.put("/owners/:id", async (req, res) => {
  try {
    const dbOwners = await db.Owners.update(req.body, {
      where: {
        id: req.body.id
      }
    });
    res.json(dbOwners);
  } catch (error) {
    res.status(500).send(error);
  }
});

dataFarm.delete("/owners/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };
  const dbOwners = await db.Owners.destroy(options);
  res.json(dbOwners);
});

module.exports = dataFarm;
