import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import userRoutes from "./routes/userRoutes.js";
import path from 'path'
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;

// CORS Policy
app.use(cors());

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json());

//Temporary route

// app.get("/", (req, res) => {
// 	res.send("It's working");
// });

// Load Routes
app.use(express.static("/client/build"));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile( "/client/build", "index.html");
});
app.use("/api/user", userRoutes);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
