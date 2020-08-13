// * required modules
const orm = require("../config/orm");

// TODO create the code that will call the ORM functions using burger specific input for the ORM
const burger = {
  all: (cb) => {
    orm.selectAll((res) => {
      cb(res);
    });
  },
  // burgerIn = { burger_name = "user entered burger" }
  create: (burgerIn, cb) => {
    orm.insertOne(burgerIn, (res) => {
      cb(res);
    });
  },
  // devourId is the id number of the burger the user has decided to devour
  update: (devourId, cb) => {
    orm.updateOne(devourId, (res) => {
      cb(res);
    });
  },
};

// * export this module
module.exports = burger;
