import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: process.env.REACT_APP_GPT_KEY,
    dangerouslyAllowBrowser: true
});

export default openai;