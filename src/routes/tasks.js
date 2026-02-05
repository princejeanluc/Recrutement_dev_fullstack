// TODO: implement task routes here
// - GET /tasks
// - POST /tasks
// - GET /tasks/:id
// - PATCH /tasks/:id
// - DELETE /tasks/:id

import { Router } from "express";

const router = Router();

// Example placeholder route (remove when implementing)
router.get("/", (_req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

export default router;
