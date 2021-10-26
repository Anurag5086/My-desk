module.exports = function (app, db) {
  // GET - For Testing
  app.get("/test", (req, res) => {
    let query = "SELECT * FROM users";
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // POST - Adding users who login through Google
  app.post("/addUser", (req, res) => {
    let query1 = `SELECT * FROM users WHERE EMAIL='${req.body.email}'`;
    db.query(query1, (err, result) => {
      if (err) throw err;
      const res1 = JSON.parse(JSON.stringify(result));

      if (!res1[0]) {
        let query2 = `INSERT INTO users VALUES('${req.body.name}', '${req.body.email}', '${req.body.googleId}')`;
        db.query(query2, (err, result) => {
          if (err) throw err;
          res.send("User successfully Added!");
        });
      } else {
        res.send("User already exists!");
      }
    });
  });
};
