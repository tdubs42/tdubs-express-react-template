const db = require("../../data/db-config.js");
const Category = require("./category-model.js");

const checkId = async (req, res, next) => {
  try {
    const category = await Category.getById(req.params.id);
    if (category) {
      req.category = category;
      next();
    } else {
      res
        .status(404)
        .json({ message: `category with id ${req.params.id} is not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkId };
