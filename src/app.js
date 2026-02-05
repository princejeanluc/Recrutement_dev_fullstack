import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();
const port = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// Routes
app.use("/tasks", tasksRouter);

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: message });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
