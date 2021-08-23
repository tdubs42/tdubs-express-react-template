const db = require("../../data/db-config.js");

const getAll = () => {
  return db("category");
};

const getById = (id) => {
  return db("category").where("id", id).first();
};

const create = async ({ cat1, cat2, cat3 }) => {
  const [id] = await db("category").insert({ cat1, cat2, cat3 });
  return getById(id);
};

const updateById = async (id, { cat1, cat2, cat3 }) => {
  await db("category").where("id", id).update({ cat1, cat2, cat3 });
  return getById(id);
};

const deleteById = async (id) => {
  const deletedData = await getById(id);
  await db("category").where("id", id).delete();
  return deletedData;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
