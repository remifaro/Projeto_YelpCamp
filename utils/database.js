const mongoose = require('mongoose');

module.exports.connect = () => {
  const dbUrl = process.env.DB_URL;
  mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
};