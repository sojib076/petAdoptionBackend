import z from 'zod';

export const loginValidation = z.object({
    body: z.object({
        user: z.object({
            email: z.string().email(),
            password: z.string(),
        }),
    }),
});
