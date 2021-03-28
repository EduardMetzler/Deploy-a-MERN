const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes.js"));
app.use("/api/create", require("./routes/create.routes"));
app.use("/api/myEntry", require("./routes/allTexts.routes"));
app.use("/api/oneEntry", require("./routes/oneEntry.routes"));

const PORT = config.get("port") || 5000;
async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}... `)
    );
  } catch (e) {
    process.exit(1);
  }
}

start();
