const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const locationRoutes = require("./routes/locationRoutes");

dotenv.config();

const app = express();
app.use("/api/auth", authRoutes);
app.use("/api/location", locationRoutes);
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Safety App Backend!');
});


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
