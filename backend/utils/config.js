// const JWT_SECRET = process.env.JWT_SECRET || "default value of SOME_THING";
const { JWT_SECRET = "dev-secret" } = process.env;

const { MONGODB_URI = "mongodb://localhost:27017/newsexplorer_db" } =
  process.env;
module.exports = {
  JWT_SECRET,
  MONGODB_URI,
};
