const express = require("express");
const app = express();

const mongoose = require("mongoose");
const userRouters = require("./routes/Routers");
const { notFound, errorHandler } = require("./exceptions/exception");
const cors = require("cors");

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb://127.0.0.1:27017/assignment9db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Connected to db");
    } else {
      console.log("Error with connection");
    }
  }
);

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/user/insert", userRouters);
app.use("/user/edit", userRouters);
app.use("/user/delete", userRouters);
app.use("/user/getAll", userRouters);
app.use("/api/users", userRouters);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started running on PORT ${PORT}`));
