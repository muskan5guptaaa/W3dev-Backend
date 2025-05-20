import { z } from "zod";
 
export const createTaskSchema = z.object({
  content: z.string().min(1, "Task content cannot be empty"),
});
 
export const updateTaskSchema = z.object({
  content: z.string().min(1, "Task content cannot be empty").optional(),
  completed: z.boolean().optional(),
});