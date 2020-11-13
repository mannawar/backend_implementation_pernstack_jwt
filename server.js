const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());

//routes

//register and login routes
app.use("/authentication", require("./routes/jwtAuth"));


//dashboard route
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});