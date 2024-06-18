import { z } from 'zod';

export const AllPetValidation = z.object({
  body: z.object({
    petname: z.string({ required_error: 'Pet name is required' }),
    description: z.string({
        required_error: 'Description is required',
    }).max(1000, { message: 'Description should not exceed 1000 characters' }),
    location: z.array(z.enum(['dhaka', 'chittagong', 'sylhet', 'khulna', 'barishal', 'rajshahi', 'rangpur', 'mymensingh'])),
    petType: z.string(),
    imageOne: z.string(),
    imageTwo: z.string(),
    addedDate: z.date().optional(),
  }),
});