const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CLOUD_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`You are connected to MongoDB ${conn.connection.host}`.green);
  } catch (error) {
    console.log(
      `Error occurred while connecting to MongoDB${error.message}`.underline.red
    );
  }
};
module.exports = connectToDB;