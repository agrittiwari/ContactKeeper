const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: " Welcome to JSOn method of response" })
);

//Define Routes

app.use("/api/users", require("./ROUTES/Users"));
app.use("/api/auth", require("./ROUTES/Auth"));
app.use("/api/contacts", require("./ROUTES/Contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on  ${PORT}..`));
