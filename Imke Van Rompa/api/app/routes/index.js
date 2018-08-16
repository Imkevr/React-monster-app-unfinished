const monsterData = require("./monsterData");
const monster_routes = require("./monster_routes");

module.exports = function(app, db) {
  monster_routes(app, db);
  monsterData();
};
