import { z } from "zod";
import * as dotenv from 'dotenv';

dotenv.config();

const schema = z.object({
    API_URL: z.string().url(),
    API_KEY: z.string()
})

export const parsedEnv = schema.parse(process.env)