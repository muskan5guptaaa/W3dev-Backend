import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
export const validateBody = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({ error: result.error.errors[0].message });
        return;
    }
    next();
};