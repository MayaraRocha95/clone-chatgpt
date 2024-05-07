import { Configuration, OpenAIApi } from 'openai';

export default class openai {
    static configuration() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        return new OpenAIApi(configuration);
    }
    static textCompletion({prompt}){
        return this.configuration().completions.create({
            model: "gpt-3.5-turbo-instruct",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });
    
    }
}



