import OpenAI from 'openai';
import { GPT_KEY } from './constants';

const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: GPT_KEY,
    dangerouslyAllowBrowser: true
});

export default openai;