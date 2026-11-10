import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { config } from "dotenv";
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(__filename, "..");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

//Log a couple of blank lines before program starts
console.log("");
console.log("");

// Unknown API endpoints get a JSON 404. Registered before the catch-all
// below, which would otherwise answer them with index.html.
app.get("/api/{*path}", (req, res) => {
  res.status(404);
  res.json({ message: "Unknown API endpoint" });
});

// Single-page app: every other path serves index.html.
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
