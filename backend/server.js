require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const customerRoutes = require("./routes/customerRoute");
const paymentRoutes = require("./routes/paymentRoute");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/payments", paymentRoutes);
// app.get("/", (req, res) => {
//   res.send("Working 🚀");
// });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
