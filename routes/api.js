var express = require('express');
var router = express.Router();

/* GET home page. */
function apiRoutes(db){
  var sleepDataSet = db.collection("sleepDataSet");

  router.get('/dataset', function(req, res, next) {
    sleepDataSet.find().toArray(function(err, dataset){
      if(err){
        return next(err, req, res);
      }
      console.log(dataset);
      res.status(200).json(dataset);
    });
  });
  router.get('/dataset/2', function(req, res, next) {
    //implementar
    var coleccion = db.collection("Datas");
    var Id = 2;

    var query= {
      Id: req.body.id
    };
    coleccion.insert(query, {function(err, md, status)})
    res.status(500).json({"error":"not implemented"});
  });

  router.get('/dataset/1', function(req, res, next) {
    //implementar
    var coleccion = db.collection("Datas");
    var Id = 1;

    var query= {
      Id: req.body.id
    };
    coleccion.insert(query, {function(err, md, status)})
    res.status(500).json({"error":"not implemented"});
  });

  router.get('/dataset/person/:id', function(req, res, next) {
    //implementar
    res.status(500).json({"error":"not implemented"});
  });

  router.post('/dataset/modAll', function(req, res, next) {
    //implementar
    db.swtest ({Id: {$ existe: true, [1]}})
    var coleccion = db.collection("Datas");
    var medicamento = medtest1;
    var query1= {
      medicamento: req.body.medtest1
    };
    var medicamente= medtest2;
    $Or
    db.swtest ({Id: {$ existe: true, [2]}})
    var query2= {
      medicamente: req.body.medtest2
    };
    coleccion.insert(query, {function(err, md, status)})
    res.status(500).json({"error":"not implemented"});
  });
  return router;
}
module.exports = apiRoutes;
