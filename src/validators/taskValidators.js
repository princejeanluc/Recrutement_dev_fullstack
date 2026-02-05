import { z } from "zod";

const createTaskSchema = z.object({
  title: z.string().min(1),
  completed: z.boolean().optional()
});

const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  completed: z.boolean().optional()
});

export { createTaskSchema, updateTaskSchema };
