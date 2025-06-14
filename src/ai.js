import { InferenceClient } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY; // for Vite


const hf = new InferenceClient(apiKey);

export async function getRecipe(ingredients) {
    try {
        const response = await hf.chatCompletion({
            model: 'mistralai/Mistral-7B-Instruct-v0.3',
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe you'd recommend I make!` }
            ],
            max_tokens: 500,
            temperature: 0.7
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error generating recipe: ", error.message);
        return null;
    }
}
