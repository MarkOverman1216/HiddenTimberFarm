.get(async (_req, res) => {
    const dbExamples = await db.Example.findAll({});
    res.json(dbExamples);
  })