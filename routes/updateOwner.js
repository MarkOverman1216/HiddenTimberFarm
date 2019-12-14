// PUT route for updating posts
 .put("/:id", async (req, res) => {
    try {
      const dbOwners = await db.Owners.update(req.body,
        {
          where: {
            id: req.body.id
          }
        });
      res.json(dbOwners);
    } catch (error) {
      res.status(500).send(error);
    }
  });