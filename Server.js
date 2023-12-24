const mongoose = require("mongoose");
const app = require("./ServerApp");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// used for send data
const { spawn } = require("child_process");
const fs = require("fs");

const imageBuffer = fs.readFileSync("./assets/qayyum.jpg");
const imageData = imageBuffer.toString("base64");

// Set the image data as an environment variable
process.env.IMAGE_DATA = imageData;

const childpython = spawn("python", ["FingerprintRecognition.py"]);

childpython.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

childpython.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

childpython.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("successful!");
});

app.listen(4000, () => {
  console.log("App is listen at port 4000");
});
