const { NODE_ENV, JWT_SECRET, BD_URL } = process.env;

module.exports = {
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'apple',
  Mongodb: NODE_ENV === 'production' ? BD_URL : 'mongodb://localhost:27017/moviesdb',
};
