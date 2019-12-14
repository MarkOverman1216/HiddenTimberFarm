// PUT route for updating posts
.put("/:id", async (req, res) => {
    try {
      const dbHorses = await db.Horses.update(req.body,
        {
          where: {
            id: req.body.id
          }
        });
      res.json(dbHorses);
    } catch (error) {
      res.status(500).send(error);
    }
  });