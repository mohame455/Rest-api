const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB is connected .....");
    })
    .catch((err) => console.error(err));
}

module.exports = connectDB;
