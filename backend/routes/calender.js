module.exports = function (app, db) {
  // POST - Adding new Events
  app.post("/addEvent", (req, res) => {
    let query = `INSERT INTO calender VALUES('${req.body.email}', '${req.body.id}', '${req.body.title}', '${req.body.start}', '${req.body.end}')`;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send("Event succesfully Added!");
    });
  });

  //DELETE - Delete an event
  app.delete("/deleteEvent/:email/:id", (req, res) => {
    let query = `DELETE FROM calender WHERE email='${req.params.email}' AND id='${req.params.id}'`;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send("Event succesfully deleted!");
    });
  });

  //GET - Get all events of an user
  app.get("/getEvents/:email", (req, res) => {
    let query = `SELECT id, title, start, end FROM calender WHERE email='${req.params.email}'`;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
};
