import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY, // Access environment variable correctly
});

export default openai;
