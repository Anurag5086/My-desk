const { cloudinary } = require("../utils/cloudinary");

module.exports = function (app, db) {
  // POST - Upload Files
  app.post("/uploadFile", async (req, res) => {
    try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "dev_setups",
      });
      let query = `INSERT INTO uploads VALUES('${req.body.email}', '${
        req.body.name
      }', '${req.body.date}', '${req.body.type}', '${uploadResponse.url}', '${
        uploadResponse.public_id.split("/")[1]
      }')`;
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send("Upload successfull!");
      });
    } catch (err) {
      res.status(500).send({ err: "Something went wrong" });
    }
  });

  //GET - All uploads based on type
  app.get("/getFiles/:email/:type", (req, res) => {
    let query = `SELECT name, date, url, publicId FROM uploads WHERE email='${req.params.email}' AND type='${req.params.type}'`;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // DELETE - Delete file
  app.delete("/deleteFile/:email/:id", (req, res) => {
    cloudinary.uploader.destroy(`dev_setups/${req.params.id}`);
    let query = `DELETE FROM uploads WHERE email='${req.params.email}' AND publicId='${req.params.id}'`;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send("Succesfully deleted!");
    });
  });
};
