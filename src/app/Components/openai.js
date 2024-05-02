import { OpenAI } from 'openai';
const apiKey = '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';
const openai = new OpenAI({apiKey, dangerouslyAllowBrowser: true});
export default openai;
