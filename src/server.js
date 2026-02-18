import express from "express";
import dotenv from "dotenv";
import { initDB, sql } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

// middleware
app.use(rateLimiter);
app.use(express.json());

// our custom simple middleware
// app.use((req, res, next) => {
//   console.log("Hey we hit a req, the method is", req.method);
//   next();
// });

app.get("/", (req, res) => {
  res.send("200 ok");
});

app.use("/api/transactions", transactionsRoute);

// app.listen(PORT, () => {
//   console.log(`S$erver is up and running on PORT:${PORT}`);
// });

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
