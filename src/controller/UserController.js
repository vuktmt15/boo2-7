const User = require("../db/model/User.js");
const {
  mutilpleMongooseToObject,
  mongooseToObject,
} = require("../until/mongoose");

class UserController {
  index(req, res, next) {
    User.find({})
      .then((users) => {
        res.render("index", { users: mutilpleMongooseToObject(users) });
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
      .then(() => res.redirect("/"))
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
      .then(() => res.redirect("/"))
      .catch(next);
  }
  destroy(req, res, next) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new UserController();
