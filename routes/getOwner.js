.get(async (_req, res) => {
  const dbExamples = await db.Owners.findAll({});
  res.json(dbExamples);
})
