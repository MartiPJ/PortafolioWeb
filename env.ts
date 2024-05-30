import { z } from "zod";
import * as dotenv from 'dotenv';

dotenv.config();

const schema = z.object({
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_API_KEY: z.string()
})

export const parsedEnv = schema.parse(process.env)