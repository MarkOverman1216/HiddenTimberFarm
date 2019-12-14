// POST route for saving a new post
app.post("/api/posts", async (req, res) => {
  try {
    const dbOwners = await db.Owners.create(req.body);
    res.json(dbOwners);
  } catch (error) {
    res.status(500).send(error);
  }
});
