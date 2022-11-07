const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid("Male", "Female").required(),
  status: Joi.string().valid("Active", "Inactive").required(),
});

module.exports = { schema };
