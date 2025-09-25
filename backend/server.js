import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// Routes
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// ===============================
// 🌍 App Config
// ===============================
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// ===============================
// 📦 Connect Services
// ===============================
connectDB()
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Stop server if DB fails
  });

connectCloudinary();

// ===============================
// 🛠️ Middlewares
// ===============================
app.use(express.json());
app.use(cors());

// ===============================
// 🚀 API Endpoints
// ===============================
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("✅ API Working");
});

// ===============================
// 🔊 Start Server
// ===============================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
