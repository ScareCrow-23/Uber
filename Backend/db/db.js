const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("✅ DB Connected"))
    .catch((err) => console.error("❌ DB Connection Error:", err.message));
}

module.exports = connectToDb;
