require("dotenv").config();

const connectDB = require("./db/connect");
const Jobs = require("./models/Job");
const jsonJobs = require("./mockaroos.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Jobs.create(jsonJobs);
    console.log("Sucesss!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
