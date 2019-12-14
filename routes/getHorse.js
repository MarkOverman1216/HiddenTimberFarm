.get(async (_req, res) => {
    const dbHorses = await db.Horse.findAll({});
    res.json(dbHorses);
  })