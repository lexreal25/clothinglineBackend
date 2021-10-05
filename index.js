const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/products')
const orderRoute = require('./routes/order')
const paymentRoute = require('./routes/stripe')
// const cors = require('cors')


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err);
  });

// app.use(cors())
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", paymentRoute)

app.listen(process.env.PORT || 4000, () => {
  console.log("Backned server running");
});
