const https = require("https");
const apiurl = "http://www.dnd5eapi.co/api/monsters/";
const axios = require("axios");
const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
  app.get('/update/api', (req, res) => {
    for (var i = 1; i < 5; i++) {
      db.collection("Monsters").remove();
      axios.get(`http://www.dnd5eapi.co/api/monsters/${i}/`).then(response => {
        db.collection('Monsters').insert(response.data, (err, results) => {
          if (err) {
            res.send({
              status: "ERROR",
              message: "Can't update data from public api " + ("http://www.dnd5eapi.co/api/monsters/" + i)
            })
          } else {
            sended = true;
            res.send({
              status: "OK",
              message: results
            })
          }
        })
      })
        .catch(error => {
          res.send(error);
        });
    }
  }
  )

  app.get('/monsters/', (req, res) => {
    db.collection('Monsters').find({}).toArray((err, results) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "Problem with finding any monsters"
        })
      } else {
        res.send({
          status: "OK",
          message: results
        })
      }
    })
  })

  // get charchter from db based on id
  app.get('/monster/:id', (req, res) => {
    const id = req.params.id;
    const details = { "_id": new ObjectID(id) };
    db.collection('Monsters').findOne(details, (err, item) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "Can't find the Monsters with id " + id
        })
      } else {
        res.send({
          status: "OK",
          message: item
        })
      }
    })
  })

  // post character into db
  app.post('/monsters/add', (req, res) => {
    let character = req.body;
    db.collection('Monsters').insert(character, (err, results) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "Can't update data from public api " + apiurl
        })
      } else {
        res.send({
          status: "OK",
          message: results
        })
      }
    })
  })

  // update character from db based on id
  app.put('/monster/:id', (req, res) => {
    const id = req.params.id;
    const details = { "_id": new ObjectID(id) };
    const character = req.body;
    db.collection('Monsters').update(details, character, (err, item) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "Can't update the monster with id " + id
        })
      } else {
        res.send({
          status: "OK",
          message: item
        })
      }
    })
  })

  // delete charachter from db based on id
  app.delete('/monsters/:id/delete', (req, res) => {
    const id = req.params.id;
    const details = { "_id": new ObjectID(id) };
    db.collection('Monsters').remove(details, (err, item) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "Can't delete the monster with id " + id
        })
      } else {
        res.send({
          status: "OK",
          message: 'monster ' + id + ' DELETED'
        });
      }
    })
  })
};
