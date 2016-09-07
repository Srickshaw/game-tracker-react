var express = require("Express");
var app = express();
var bodyParser = require("body-parser");
var url = require("url");
var query = require("querystring");
var settings = require("./settings.json");
var knexPg = require("knex")({
  client: 'pg',
  connection: settings.connection
});

var bookshelf = require('bookshelf')(knexPg);

var gamesTest = bookshelf.Model.extend({
  tableName: 'games'
});

app.use(express.static('dist'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get('/games', function(req, res) {
  gamesTest.forge()
  .fetchAll()
  .then(function(games) {
    res.json({data: games.toJSON()});
  });
});

app.post('/games', function(req, res) {
  gamesTest.forge({
    game_name: req.body.gameName,
    game_system: req.body.gameSystem,
    finished: req.body.finished,
    created_at: new Date,
    updated_at: new Date
  })
  .save()
  .then(
    gamesTest.forge()
    .fetchAll()
    .then(function(games) {
      res.json({data: games.toJSON()})
    })
  )
});

app.put('/games/:id', function(req, res) {
  gamesTest.forge({id: req.params.id})
  .fetch({ require: true })
  .then(function(game) {
    game.save({
      game_name: req.body.gameName || game.get('game_name'),
      game_system: req.body.gameSystem || game.get('game_system'),
      finished: req.body.finished || game.get('finished'),
      updated_at: new Date
    })
    .then(res.json({success: true}))
  })
});

app.delete('/games/:id', function(req, res) {
  gamesTest.forge({id: req.params.id})
  .fetch({ require: true })
  .then(function(testItem) {
    testItem.destroy()
    .then(  
      gamesTest.forge()
      .fetchAll()
      .then(function(games) {
        res.json({data: games.toJSON()})
    }));
  })
});

app.listen(7777, function() {
  console.log("Server is up and running");
})
