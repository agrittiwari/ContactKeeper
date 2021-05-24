const express = require("express");
const connectDB = require("./config/db");
const path = require('path');

const app = express();

//connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));



//Define Routes

app.use("/api/users", require("./ROUTES/Users"));
app.use("/api/auth", require("./ROUTES/Auth"));
app.use("/api/contacts", require("./ROUTES/Contacts"));

//serve static folder
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'));
  app.get('*',(req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on  ${PORT}..`));
