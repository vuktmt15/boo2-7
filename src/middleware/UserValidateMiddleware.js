const { schema } = require("../validate/validate-data-user");

class UserValidateDataBody {
  async check(req, res, next) {
    try {
      schema.validate(req.body);
      console.log(1);
      next();
    } catch (e) {
      console.log(2);
      next(e);
    }
  }
}

module.exports = new UserValidateDataBody();
