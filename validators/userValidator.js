import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3).max(20),
  username: z.string().min(3).max(20).trim(),
  email: z.email(),
  password: z.string().min(5),
  number: z.number().min(10).max(11),
});

export default userSchema;
