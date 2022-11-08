const User = require("../db/model/User.js");
const {
  mutilpleMongooseToObject,
  mongooseToObject,
} = require("../until/mongoose");

class UserController {
  index(req, res, next) {
    User.find({})
      .then((users) => {
        res.render("index", {
          users: mutilpleMongooseToObject(users),
          alerts: req.query.alerts,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("create");
  }
  store(req, res, next) {
    const dataUser = req.body;
    const newUser = new User(dataUser);
    newUser
      .save()
      .then(() => {
        res.redirect("/?alerts=Created");
      })
      .catch(next);
  }
  edit(req, res, next) {
    User.findOne({ _id: req.params.id })
      .then((user) =>
        res.render("update", {
          user: mongooseToObject(user),
        })
      )
      .catch(next);
  }
  update(req, res, next) {
    const dataUser = req.body;
    User.updateOne({ _id: req.params.id }, dataUser)
      .then(() => res.redirect("/?alerts=Updated"))
      .catch(next);
  }
  destroy(req, res, next) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/?alerts=Deleted"))
      .catch(next);
  }
}

module.exports = new UserController();
