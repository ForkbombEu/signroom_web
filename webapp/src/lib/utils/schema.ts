import { z } from 'zod';

export const folder = z.object({
	name: z.string(),
	description: z.string().optional(),
	owner: z.string()
});

export const signature = z.object({
	title: z.string(),
	type: z.enum(['pdf', 'xml', 'json']),
	owner: z.string(),
	folder: z.string().optional()
});
