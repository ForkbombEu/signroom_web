import { z } from 'zod';

export const folder = z.object({
	name: z.string(),
	description: z.string().optional(),
	owner: z.string()
});
