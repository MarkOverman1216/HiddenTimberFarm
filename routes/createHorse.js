.post(async (req, res) => {
    const dbHorses = await db.Horses.create(req.body);
    res.json(dbHorses);
  });