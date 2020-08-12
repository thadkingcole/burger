// * required modules
const orm = require("../config/orm");

// TODO create the code that will call the ORM functions using burger specific input for the ORM
const burger = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
};

// * export this module
module.exports = burger;
